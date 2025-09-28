import { visit } from 'unist-util-visit';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export function rehypeInjectZoom() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      // Inject script into the head or body
      if (node.tagName === 'body') {
        // Read the zoom script content
        const scriptContent = readFileSync(join(__dirname, 'docs/public/zoom-mermaid.js'), 'utf8');

        // Create script element
        const scriptNode = {
          type: 'element',
          tagName: 'script',
          properties: {},
          children: [
            {
              type: 'text',
              value: scriptContent
            }
          ]
        };

        // Add script to end of body
        node.children.push(scriptNode);
      }
    });
  };
}