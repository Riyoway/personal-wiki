# My Wiki

A personal wiki built with [Astro Starlight](https://starlight.astro.build/).
Notes, how-tos, and references.

## Commands

```sh
npm install      # first time
npm run dev      # preview at http://localhost:4321
npm run build    # build to dist/
```

## Structure

Content lives in `src/content/docs/`:

- `notes/` — short notes
- `how-to/` — reusable steps
- `reference/` — lookups and snippets

Each folder is auto-generated into the sidebar, so adding a `.md` file is
enough to add a page.
