# Hudson Glines portfolio

An Astro portfolio with a scrolling homepage and three project case studies.

```sh
bun install
bun run dev
bun run build
```

Portfolio text and links live in `src/data/portfolio.json`. To add project evidence, store the assets in `public/media/` and add entries to that project's `media` list. Each entry takes a `type` of `image` or `video`, a path such as `media/example.webp`, an `alt` description, and an optional `caption`. The first image also appears as the project cover. Add playable games and external trailers to the project's `links` list.

For GitHub Pages, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The workflow runs on pushes to `main` and gets the published base path from GitHub Pages.
