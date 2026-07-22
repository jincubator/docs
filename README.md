# Jincubator.com

Jincubator is John Whitton's independent research and engineering studio. This repository contains the public Vocs site.

## Development

The maintained lockfile is `bun.lock`; use Bun 1.3.6 and do not add a competing lockfile.

```sh
bun install --frozen-lockfile
bun run dev
```

The local development server prints its review URL, normally `http://localhost:5173/`.

## Validation

```sh
bun run test
bun run vocsbuild
bun run validate:external
```

`vocsbuild` builds the site and then checks required routes, metadata, internal links and fragments, image alt text, the public registry digest, prohibited claims, and private-path/build leakage. The external check reports reachable, definitive failure, access-controlled, and inconclusive results separately.

## Generated Salus publication

`docs/pages/work/salus.mdx` and `docs/public/data/publications/work-salus.json` are generated together from the canonical Knowledge Base source. The page is tracked presentation output and must not be edited directly.

To update it, run the Knowledge Base publication `stage` and `check` commands, copy both files, verify both copies with `cmp`, then run the Docs tests and build. The Docs validator checks the manifest shape, provenance consistency, and MDX digest. Checksum consistency does not replace deterministic regeneration and code review.

Manual deployment remains `bun run sitedeploy` and is not part of Track E.

## Deployment

GitHub Pages deployment is manual:

```sh
bun run sitedeploy
```

Do not run deployment during ordinary build or review. The deployment command retains the `www.jincubator.com` CNAME.
