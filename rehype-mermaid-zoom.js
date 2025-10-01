import { visit } from 'unist-util-visit';

/**
 * Rehype plugin to add zoom/pan functionality to mermaid diagrams
 */
export function rehypeMermaidZoom() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      // Find SVG elements that are mermaid diagrams
      if (
        node.tagName === 'svg' &&
        (node.properties?.id?.startsWith?.('mermaid') ||
          node.properties?.className?.includes?.('mermaid') ||
          node.properties?.ariaRoledescription === 'flowchart-v2')
      ) {
        // Add data attribute to mark as zoomable
        node.properties.dataZoomable = 'true';

        // Add classes for styling
        const currentClass = node.properties.className || [];
        node.properties.className = Array.isArray(currentClass)
          ? [...currentClass, 'mermaid-zoomable']
          : [currentClass, 'mermaid-zoomable'].filter(Boolean);

        // Add cursor style
        const currentStyle = node.properties.style || '';
        node.properties.style = `${currentStyle};cursor:zoom-in;max-width:100%;height:auto;`;
      }
    });
  };
}
