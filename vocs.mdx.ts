import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default {
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
};
