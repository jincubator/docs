import { defineConfig } from "vocs";

export default defineConfig({
  title: "Jincubator",
  description:
    "Jincubator is a protocol for creating and managing intent swaps.",
  iconUrl: "/images/jincubator.png",
  logoUrl: "/images/jincubator.png",
  ogImageUrl:
    "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
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
        { text: "IntentSwap", link: "/design/flow" },
      ],
    },
  ],
});
