# Hudson Glines portfolio

[Visit the portfolio](https://drusticc.github.io/portfolio/)

This site introduces Hudson Glines, a Computer Systems Technology student at Saskatchewan Polytechnic. It includes case studies on the Synthdicate Entertainment website, the SCBSCN assessment platform, and the game jam project *Head Overhealed*.

## Run locally

The site uses Astro, Bun, and Node.js 24. From a local checkout:

```sh
bun install
bun run dev
```

Run `bun run build` to generate the static site in `dist/` and `bun run preview` to preview that build. The site has no backend, accounts, or required environment variables.

## Project layout

| Path | Purpose |
| --- | --- |
| `src/data/portfolio.json` | About, skills, contact links, and project case studies |
| `src/pages/` | Homepage and static project routes |
| `src/styles/` | Responsive layout, colour themes, and self-hosted fonts |
| `public/` | Public downloads and font licences |
| `.github/workflows/deploy.yml` | GitHub Pages build and deployment |

## Hosting and assets

GitHub Actions builds the site from `main` and deploys it to GitHub Pages. Astro uses the Pages URL and base path reported by GitHub, so project links work under `/portfolio/`. To deploy from your own repository, select **GitHub Actions** as the Pages source in the repository settings.

The site uses [Source Sans 3](https://github.com/adobe-fonts/source-sans) and [Space Grotesk](https://github.com/floriankarsten/space-grotesk) under their respective SIL Open Font Licenses. The résumé and case studies are published for portfolio viewing. The repositories for the featured projects are separate from this site.
