# Story

The decisions in decisions.md, retold for people as chapters, one problem each. Newest last. decisions.md is the record: agents read and cite it, not this file.

## 1. A real website for the launch

Decisions: D-001 to D-003

I wanted a real website to put in the launch posts, in the family of my portfolio and Astrion but plainer. It got a repo of its own, so the app's history stays about the app (D-001).

It lives on Cloudflare, where my DNS already is. Pages turned out to be part of Workers now, and Wrangler's auto-setup tried to turn the site into a server app. We undid that and kept plain files on a Worker that runs no code, at microbridge.philopateer.dev (D-002).

Turning point: the first drawing of the pad was a grey box that went dark after a click and told me I had clicked wrong. I hated it. We redrew it after the real pad on the product page, in our own drawing, and made every click explain its key instead (D-003).

Cost: deploys still run from my Mac, and the Download button waits on a signed release.
