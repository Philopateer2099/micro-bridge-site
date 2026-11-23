// Takes pictures of the social card (public/og.png) and the touch icon (public/apple-touch-icon.png)
// with headless Chrome. Run `bun run build` first: this serves dist/ while it works.
import { execFileSync, spawn } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const chrome = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const port = 4329;
const shot = (url, file, w, h) =>
  execFileSync(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--force-prefers-reduced-motion",
    `--window-size=${w},${h}`,
    "--virtual-time-budget=4000",
    `--screenshot=${file}`,
    url,
  ], { stdio: "ignore" });

const server = spawn("npx", ["astro", "preview", "--port", String(port)], { stdio: ["ignore", "pipe", "inherit"] });
await new Promise((ok, fail) => {
  server.stdout.on("data", (d) => String(d).includes(`localhost:${port}`) && ok());
  server.on("exit", () => fail(new Error("astro preview stopped")));
  setTimeout(() => fail(new Error("astro preview did not start")), 20000);
});
try {
  shot(`http://localhost:${port}/og`, "public/og.png", 1200, 630);
  const dir = mkdtempSync(join(tmpdir(), "mb-icon-"));
  const svg = readFileSync("public/favicon.svg", "utf8").replace('rx="8"', 'rx="0"');
  writeFileSync(join(dir, "icon.html"), `<style>html,body{margin:0;background:#0b0b0c}svg{width:180px;height:180px;display:block}</style>${svg}`);
  shot(`file://${join(dir, "icon.html")}`, "public/apple-touch-icon.png", 180, 180);
  rmSync(dir, { recursive: true });
  console.log("wrote public/og.png and public/apple-touch-icon.png");
} finally {
  // Astro 7 keeps a preview server running in the background; stop it.
  execFileSync("npx", ["astro", "preview", "stop"], { stdio: "ignore" });
  server.kill();
}
