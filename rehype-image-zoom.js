import { visit } from "unist-util-visit";

export function rehypeImageZoom() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (
        node.tagName !== "img" ||
        !node.properties?.src ||
        parent?.tagName === "a" ||
        typeof index !== "number"
      ) {
        return;
      }

      const className = node.properties.className ?? [];
      node.properties.className = [
        ...(Array.isArray(className) ? className : [className]),
        "jincubator-image-zoom__image",
      ].filter(Boolean);

      parent.children[index] = {
        type: "element",
        tagName: "button",
        properties: {
          type: "button",
          className: ["jincubator-image-zoom"],
          ariaLabel: `Open full-size image: ${node.properties.alt || "image"}`,
        },
        children: [
          node,
          {
            type: "element",
            tagName: "span",
            properties: {
              className: ["jincubator-image-zoom__indicator"],
              ariaHidden: "true",
            },
            children: [],
          },
        ],
      };
    });
  };
}
