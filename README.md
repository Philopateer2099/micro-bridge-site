# micro-bridge-site

The website for [MicroBridge](https://github.com/Philopateer2099/micro-bridge), the bridge between
the Codex Micro keypad and Claude Code. Astro, static, no analytics and no third-party scripts.

## Run it

Needs Node 24 (`mise.toml` pins it) and Bun.

```sh
bun install
bun run dev        # http://localhost:4321
bun run build      # writes dist/
bun run check      # type check
```

## Where things are

- `src/pages/index.astro`: the page. Every claim on it comes from the MicroBridge README; change
  the README first, then the page.
- `src/components/Pad.astro`: the drawing of the pad and its example. The sessions in it are made up.
- `src/site.ts`: the site's address, the repo, the author and the demo video, in one place.
- `src/pages/og.astro`: the social card. `bun run build && bun run images` takes its picture into
  `public/og.png`, and the touch icon into `public/apple-touch-icon.png` (uses Google Chrome).
- `public/window-*.png`: the app window, copied from the MicroBridge repo's `docs/images`.

## Rules for the words

- Say "unofficial" where people land. MicroBridge is not affiliated with OpenAI, Work Louder or
  Anthropic, and no page may suggest it is.
- Only claims someone can check in the MicroBridge repo. No numbers that drift (test counts, stars).
- Commits use the GitHub noreply address, like the MicroBridge repo.

## License

MIT, like MicroBridge.
