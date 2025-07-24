import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { ZoomImage } from "./docs/public/components/ZoomImage";

export default {
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
  components: {
    ZoomImage,
  },
};
