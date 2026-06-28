---
title: About
description: What this wiki is and how it's organized.
---

A personal wiki for notes, how-tos, and references.

## Sections

- **Notes** (`src/content/docs/notes/`) — short notes.
- **How-to** (`src/content/docs/how-to/`) — reusable steps.
- **Reference** (`src/content/docs/reference/`) — lookups and snippets.

Each section is auto-generated from its folder in `astro.config.mjs`,
so adding a file is enough to add a page.

## Adding a page

Drop a `.md` file in one of the folders (the filename becomes the URL) and
start it with frontmatter:

```markdown
---
title: Page title
description: Short summary
---
```

## Local commands

```sh
npm run dev      # preview at http://localhost:4321
npm run build    # build to dist/
```
