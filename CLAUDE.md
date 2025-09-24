# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a documentation site for Jincubator.com built with [Vocs](https://vocs.dev), a React-based documentation framework. The site focuses on research in intent-based solving, arbitrage, and market making, along with blockchain research from 2022-2025.

## Commands

### Development
- `npm run dev` - Start development server with hot reload
- `npm run vocsbuild` - Build the static site for production
- `npm run preview` - Preview the built site locally

### Deployment
- `npm run predeploy` - Runs build before deployment (automatically called)
- `npm run sitedeploy` - Deploy to GitHub Pages with custom domain (www.jincubator.com)

### Code Quality
- ESLint is configured for TypeScript, React, and MDX files
- Prettier is integrated for code formatting
- TypeScript strict mode is enabled with additional linting rules

## Architecture

### Content Structure
- **docs/pages/** - All content organized by sections:
  - `research/` - Technical research and analysis
  - `proposals/` - Grant applications and project proposals  
  - `products/` - Past work and deliverables
  - `partnerships/` - Partnership information
- **docs/public/** - Static assets (images, components, etc.)
- **docs/dist/** - Built site output (generated)

### Configuration
- **vocs.config.ts** - Main site configuration with navigation, sidebar structure, and plugin setup
- **eslint.config.ts** - ESLint configuration for TypeScript, React, and MDX
- **tsconfig.json** - TypeScript configuration with strict linting

### Content Features
- MDX format for rich content with React components
- Math expressions via remark-math and rehype-mathjax
- Mermaid diagrams via remark-mermaidjs
- PDF viewing capabilities with react-pdf
- Image zoom functionality via ZoomImage component
- Code syntax highlighting and formatting

### Custom Components
- **ZoomImage** (docs/public/components/ZoomImage.tsx) - Provides click-to-zoom functionality for images

### Build System
- Vocs handles bundling and static site generation
- TypeScript compilation with modern ES2020 target
- React JSX transform
- Automatic deployment pipeline to GitHub Pages