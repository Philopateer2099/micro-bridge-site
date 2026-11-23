# Decisions

One entry per decision, newest last. Format: decision, why, consequence.

## D-001 (2026-11-23): The website is its own project

Decision: MicroBridge's website lives in its own public repo, micro-bridge-site: a static Astro 7 site with one page, a pad drawing that plays an example, a social card, a sitemap and a 404 page. No analytics and no third-party scripts.
Why: The owner wanted a real site for the launch posts, in the family of their portfolio and Astrion but plainer. Keeping it apart from the app repo keeps the app's history and CI about the app.
Consequence: Every claim on the page comes from the MicroBridge README, so the README changes first. The site/ folder and Site workflow in the micro-bridge repo are now redundant; whether to remove them is a decision for that repo.
Rejected: Turning on GitHub Pages for the micro-bridge repo's site/ folder: it would tie the site to the app repo and its pushes.
By: claude

## D-002 (2026-11-23): Host on Cloudflare as static files at microbridge.philopateer.dev

Decision: The site deploys with `bun run deploy` (astro build, then wrangler deploy) as a Cloudflare Worker that has static assets only and no code. wrangler.jsonc attaches microbridge.philopateer.dev as a custom domain, turns off the workers.dev and preview addresses, and serves dist/404.html for unknown paths.
Why: philopateer.dev's DNS is already on Cloudflare, and a custom domain on a Worker makes Cloudflare create the DNS record and certificate itself. Cloudflare has folded Pages into Workers: Wrangler 4.166 hands every pages command to its Workers flow.
Consequence: Deploys run from this Mac with the owner's Wrangler sign-in, which only has account and zone read plus Workers scripts and routes (no DNS, KV or D1). There is no deploy on push yet. Wrangler's auto-setup must not run: it adds the @astrojs/cloudflare server adapter and rewrites astro.config.mjs, tsconfig.json and package.json. A wrangler.jsonc in the repo stops it.
Rejected: Cloudflare Pages direct upload (now routed to Workers by Wrangler); the @astrojs/cloudflare adapter (a server the site does not need); Vercel (a second host when DNS is on Cloudflare); GitHub Pages from the app repo.
By: claude

## D-003 (2026-11-23): Draw the pad after the real one, in our own drawing

Decision: The hero drawing follows the Codex Micro as OpenAI's Supply Co. product page shows it: a frosted case, a plate with four screws, clear Agent Keys lit from below, white command keys with line icons, a dial with a slanted top, the stick in a dashed square and a flat touch sensor. It is our own CSS and SVG. Clicks say what a key does, the example carries on 8 s after the last click, and it never turns every key off.
Why: The owner disliked the first drawing: a grey box that went dark after a click and told the reader they had done it wrong. They asked for it to match the pad's look on the Supply Co. site.
Consequence: The social card shows the same drawing, so `bun run images` re-renders public/og.png after a change. The Codex key gets a send arrow, not the Codex logo. Keys size from the space the pad gets (a container query), so it fits any column.
Rejected: Using the Supply Co. product images (not ours to publish); a still picture with no clicks; no drawing at all.
By: claude
