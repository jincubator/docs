import { defineConfig } from "vocs";

export default defineConfig({
  title: "Jincubator",
  sidebar: [
    {
      text: "Overview",
      link: "/overview",
    },
    {
      text: "Design",
      collapsed: false,
      items: [
        { text: "Design Intro", link: "/design/intro" },
        { text: "Architecture", link: "/design/architecture" },
        { text: "Hook Design - WIP", link: "/design/hooks" },
      ],
    },
  ],
});
