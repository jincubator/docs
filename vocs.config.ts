import { defineConfig } from "vocs";

export default defineConfig({
  title: "Jincubator",
  sidebar: [
    {
      text: "Overview",
      link: "/overview",
    },
    {
      text: "Concepts",
      collapsed: true,
      items: [
        { text: "Concept1", link: "/concepts/concept1" },
        { text: "Concept2", link: "/concepts/concept2" },
      ],
    },
  ],
});
