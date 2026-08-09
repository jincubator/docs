import { visit } from "unist-util-visit";

function attributeValue(attributes, name) {
  return attributes.find((attribute) => attribute.type === "mdxJsxAttribute" && attribute.name === name)?.value;
}

export function remarkImageZoom() {
  return (tree) => {
    for (const type of ["mdxJsxFlowElement", "mdxJsxTextElement"]) {
      visit(tree, type, (node, index, parent) => {
        if (
          node.name !== "img" ||
          !attributeValue(node.attributes, "src") ||
          parent?.name === "a" ||
          typeof index !== "number"
        ) {
          return;
        }

        const alt = attributeValue(node.attributes, "alt") || "image";
        parent.children[index] = {
          type: node.type,
          name: "button",
          attributes: [
            { type: "mdxJsxAttribute", name: "type", value: "button" },
            { type: "mdxJsxAttribute", name: "className", value: "jincubator-image-zoom" },
            { type: "mdxJsxAttribute", name: "aria-label", value: `Open full-size image: ${alt}` },
          ],
          children: [
            node,
            {
              type: "mdxJsxTextElement",
              name: "span",
              attributes: [
                { type: "mdxJsxAttribute", name: "className", value: "jincubator-image-zoom__indicator" },
                { type: "mdxJsxAttribute", name: "aria-hidden", value: "true" },
              ],
              children: [],
            },
          ],
        };
      });
    }
  };
}
