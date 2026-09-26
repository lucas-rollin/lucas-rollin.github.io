# Lucas Rollin Ferreira · Portfolio

The personal portfolio and resume website of **Lucas Rollin Ferreira** (Civil Engineer, Full-Stack Developer, and Data Analyst), accessible at [lucas-rollin.github.io](https://lucas-rollin.github.io/).

## Contents

- [Architecture & Technology Stack](#architecture--technology-stack)
- [Project Structure](#project-structure)
- [Development](#development)
- [Code Quality & Linting](#code-quality--linting)
- [Content Updates](#content-updates)
- [Deployment](#deployment)

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
  - [djlint](https://www.djlint.com/) (managed with [uv](https://docs.astral.sh/uv/)) for HTML and Tera template linting.
- **CI/CD:** [GitHub Actions](https://github.com/features/actions) deploying directly to [GitHub Pages](https://pages.github.com/).

## Project Structure

```text
.
├── .github/workflows/deploy.yml  # Automated build and GitHub Pages deployment
├── content/                      # Content and data files (TOML frontmatter)
│   ├── _index.md                 # English homepage (about, experience, projects)
│   ├── _index.pt.md              # Portuguese homepage
│   ├── certificates.md           # English certificates dataset
│   └── certificates.pt.md        # Portuguese certificates dataset
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
│   ├── certificates.html         # Responsive certificates view (table & card grid)
│   ├── components.html           # Reusable UI components (project blocks, cards, badges)
│   └── partials/                 # Modal dialogue and navigation partials
├── biome.json                    # Biome linter and formatter configuration
├── package.json                  # Node scripts and dependencies
├── pyproject.toml                # uv and djlint configuration
└── zola.toml                     # Zola site configuration, navigation, and i18n dictionaries
```

## Development

> This is a personal portfolio, maintained solo. Issues and suggestions are welcome, but the workflow below is documented mainly for my own future reference.

### Prerequisites

- [Zola](https://www.getzola.org/documentation/getting-started/installation/) (`>= 0.23.6`)
- [Node.js](https://nodejs.org/) (`>= 22`) & `npm`
- [uv](https://docs.astral.sh/uv/) (optional, for running `djlint`)

### Installation

```bash
npm install
```

### Local Development

To run the development server with live CSS rebuilding, JS bundling, and hot reloading:

```bash
npm run watch
```

Watches and rebuilds CSS and JS, and serves the site live via Zola at `http://127.0.0.1:1111/`. See `package.json` for the underlying scripts.

### Building for Production

To test a full production build locally:

```bash
npm run build:site
```

Runs the full production build (CSS, JS, then `zola build`) into `./public`. See `package.json` for script details.

## Code Quality & Linting

### JavaScript (Biome)

Check for errors and formatting issues:
```bash
npx @biomejs/biome check .
```

Automatically apply formatting and organize imports:
```bash
npx @biomejs/biome check --write .
```

### Templates (djlint via uv)

Check Tera template syntax and HTML structure:
```bash
uv run djlint --lint .
```

Format templates according to indentation rules:
```bash
uv run djlint --reformat .
```

## Content Updates

- **Adding a Project:** Add a new `[[extra.projects]]` entry to both `content/_index.md` (EN) and `content/_index.pt.md` (PT). Attach media assets with `[[extra.projects.media]]` (supports images and videos).
- **Adding Experience:** Add a `[[extra.experience]]` block in both homepage content files.
- **Adding Certificates:** Add a `[[extra.certificates]]` entry in `content/certificates.md` and `content/certificates.pt.md`.
- **Translations:** Add or update translation strings in `zola.toml` under `[languages.en.translations]` and `[languages.pt.translations]`.

## Deployment

Deployments are fully automated. Pushing any commit to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the project and deploys `./public` to GitHub Pages.
