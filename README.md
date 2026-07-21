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

## Deployment

GitHub Pages deployment is manual:

```sh
bun run sitedeploy
```

Do not run deployment during ordinary build or review. The deployment command retains the `www.jincubator.com` CNAME.
