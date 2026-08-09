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

## Generated Knowledge Base publications

The generated Work, Research, Architecture, and Article pages are tracked presentation outputs from canonical Knowledge Base artifacts. Each MDX page and its matching file under `docs/public/data/publications/` move together and must not be edited directly.

To update them, commit and push the Knowledge Base source first, run every applicable publication `stage` and `check` command, copy each MDX/manifest pair, verify exact bytes with `cmp`, then run the Docs tests and build. The Docs validator checks manifest shape, artifact and route identity, one shared reachable source commit, projection sections, provenance, public safety, site-relative internal navigation, and MDX digests. Checksum consistency does not replace deterministic regeneration and code review.

Manual deployment remains `bun run sitedeploy` and is not part of Track E.

## Deployment

GitHub Pages deployment is manual:

```sh
bun run sitedeploy
```

Do not run deployment during ordinary build or review. The deployment command retains the `www.jincubator.com` CNAME.
