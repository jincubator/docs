import { needsHistoricalContext } from "./route-policy.js";


function routeFromFile(file) {
  const source = String(file.path ?? file.history?.[0] ?? "").replaceAll("\\", "/");
  const marker = "/docs/pages/";
  const markerIndex = source.lastIndexOf(marker);
  const relative = markerIndex >= 0
    ? source.slice(markerIndex + marker.length)
    : source.replace(/^docs\/pages\//, "");
  if (!relative.endsWith(".mdx")) return null;
  const stem = relative.slice(0, -4);
  return stem === "index" ? "/" : `/${stem}`;
}


function textContent(node) {
  if (node.type === "text") return node.value;
  return (node.children ?? []).map(textContent).join("");
}


export function rehypeHistoricalContext() {
  return (tree, file) => {
    const route = routeFromFile(file);
    if (!route || !needsHistoricalContext(route)) return;
    const existing = tree.children.find(
      (node) =>
        node.type === "element" &&
        node.tagName === "blockquote" &&
        /\bhistorical\b/i.test(textContent(node)),
    );
    if (existing) {
      existing.properties = {
        ...existing.properties,
        dataHistoricalContext: "true",
      };
      return;
    }
    const notice = {
      type: "element",
      tagName: "blockquote",
      properties: { dataHistoricalContext: "true" },
      children: [{
        type: "element",
        tagName: "p",
        properties: {},
        children: [
          {
            type: "text",
            value:
              "Historical page retained for compatibility. It may contain superseded assumptions, incomplete plans, or outdated links and is not current canonical content. See the ",
          },
          {
            type: "element",
            tagName: "a",
            properties: { href: "/archive/intro" },
            children: [{ type: "text", value: "Archive" }],
          },
          { type: "text", value: " for context." },
        ],
      }],
    };
    const heading = tree.children.findIndex(
      (node) => node.type === "element" && node.tagName === "h1",
    );
    tree.children.splice(heading >= 0 ? heading + 1 : 0, 0, notice);
  };
}
