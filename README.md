# Lucas Rollin Ferreira · Portfolio

The personal portfolio and resume website of **Lucas Rollin Ferreira** (Full-Stack Developer, Data Analyst and Civil Engineer), accessible at [lucas-rollin.github.io](https://lucas-rollin.github.io/).

## Contents

- [Lucas Rollin Ferreira · Portfolio](#lucas-rollin-ferreira--portfolio)
  - [Contents](#contents)
  - [Architecture \& Technology Stack](#architecture--technology-stack)
  - [Project Structure](#project-structure)
  - [Development](#development)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Commands Overview](#commands-overview)
  - [Content Updates](#content-updates)
  - [CI/CD \& Deployment](#cicd--deployment)

## Architecture & Technology Stack

This project is built as an accessible and lightweight static site:

- **Static Site Generator:** [Zola](https://www.getzola.org/) (v0.23+)
  - Uses the **Tera v2** template engine with reusable `{% component %}` macros.
  - Native bilingual / internationalization (i18n) support for English (`/`) and Portuguese (`/pt/`).
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI v5](https://daisyui.com/)
  - Compiled using `@tailwindcss/cli`.
  - Dark mode ("night") and light mode ("corporate") theme switching with local storage persistence and system preference detection.
- **Interactivity:** [Alpine.js v3](https://alpinejs.dev/)
  - Modular component architecture (`navbar.js`, `modal.js`, `theme.js`).
  - Bundled and minified into a single bundle using [esbuild](https://esbuild.github.io/).
- **Quality & Linting:**
  - [Biome](https://biomejs.dev/) for JavaScript formatting.
  - [djlint](https://www.djlint.com/) for HTML and Tera template linting.
  - [mdformat](https://github.com/hukkin/mdformat) for Markdown file formatting.
- **CI/CD:** [GitHub Actions](https://github.com/features/actions) deploying directly to [GitHub Pages](https://pages.github.com/).

## Project Structure

```text
.
├── .github/workflows/
│   ├── ci.yml                    # Automated code quality checks & build validation
│   └── deploy.yml                # Automated build and GitHub Pages deployment
├── content/                      # Content and data files (TOML frontmatter)
│   ├── _index.md                 # homepage (about, experience, projects)
│   ├── certificates/             # certificates pages dataset
│   ├── projects/                 # projects pages dataset
├── static/                       # Static assets
│   ├── css/input.css             # Tailwind and DaisyUI entry CSS
│   ├── js/                       # Alpine.js component modules
│   │   ├── entry.js              # Bundler entrypoint (initializes Alpine)
│   │   ├── modal.js              # Project media gallery & video modal logic
│   │   ├── navbar.js             # Scroll-spy & active section indicator
│   │   └── theme.js              # Theme switcher logic
│   ├── img/                      # Project screenshots, logos, and SVGs
│   └── pdf/                      # Resumes, diplomas, and documents
├── templates/                    # Tera v2 HTML templates
│   ├── base.html                 # Main layout shell, SEO, metadata, and theme toggle
│   ├── index.html                # Single-page portfolio layout
│   ├── archive.html              # Responsive projects/certificates table view
│   ├── article.html              # Markdown-first template for long-form articles
│   ├── components.html           # Reusable UI components (project blocks, cards, badges)
│   └── partials/                 # Modal dialogue and navigation partials
├── biome.json                    # Biome linter and formatter configuration
├── package.json                  # Node scripts and dependencies
├── pyproject.toml                # uv and djlint configuration
└── zola.toml                     # Zola site configuration, navigation, and i18n dictionaries
```

Content pages have a `.pt.md` Portuguese version counterpart.

## Development

> **Note:** This is a personal portfolio repository. Setup and build instructions are documented primarily for local environment setup and maintenance reference.

### Prerequisites

- [Zola](https://www.getzola.org/documentation/getting-started/installation/) (`>= 0.23.6`)
- [Node.js](https://nodejs.org/) (`>= 22`) & `npm`
- [uv](https://docs.astral.sh/uv/) (optional, for running `djlint` and `mdformat`)

### Installation

```bash
git clone https://github.com/lucas-rollin/lucas-rollin.github.io.git
cd lucas-rollin.github.io
npm install
uv sync
```

### Commands Overview

| Task | Command |
| :--- | :--- |
| **Start Dev Server** | `npm run watch` |
| **Production Build** | `npm run build:site` |
| **Lint & Format JS** | `npx @biomejs/biome check --write .` |
| **Lint Templates** | `uv run djlint --reformat .` |
| **Format Markdown** | `uv run mdformat content/` |
| **Run CI Checks** | `npm run check` |

## Content Updates

- **Adding a Feature Project:** Add a new `[[extra.projects]]` entry to both `content/_index.md` (EN) and `content/_index.pt.md` (PT). Attach media assets with `[[extra.projects.media]]` (supports images and videos).
- **Adding Experience:** Add a `[[extra.experience]]` block in both homepage content files.
- **Adding Project or Certificate:** Add a `[[extra.item]]` entry in `content/certificates.md` or `content/projects.md` and related portuguese files.
- **Translations:** Add or update translation strings in `zola.toml` under `[languages.en.translations]` and `[languages.pt.translations]`.

## CI/CD & Deployment

The repository uses two automated GitHub Actions workflows:

1. **[CI Checks (`ci.yml`)](.github/workflows/ci.yml):** Runs on every pull request and push (through deploy) to validate formatting, template syntax, markdown compliance, and successful site compilation.
2. **[Deployment (`deploy.yml`)](.github/workflows/deploy.yml):** Triggers automatically on pushes to `main`, building the site and deploying `./public` to GitHub Pages.
