// Everything the pages say about where things live. Change a link here, not in the pages.
export const SITE = {
  name: "MicroBridge",
  // The site's own address. Pick the host before the first deploy; every absolute link follows it.
  url: "https://microbridge.philopateer.dev",
  repo: "https://github.com/Philopateer2099/micro-bridge",
  author: "Philopateer Shenouda",
  authorUrl: "https://www.philopateer.dev",
  description:
    "Use the Codex Micro keypad with Claude Code on macOS. Six keys follow six sessions and light by what each is doing. Open source and unofficial.",
  // A screen recording of the pad, once there is one: { src: "/demo.mp4", poster: "/demo.jpg" }.
  demo: null as null | { src: string; poster: string },
} as const;

export const doc = (path: string) => `${SITE.repo}/blob/main/${path}`;
