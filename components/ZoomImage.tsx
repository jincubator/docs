import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export const ZoomImage = ({ alt = "", className, style, ...props }: Props) => (
  <button
    type="button"
    className="jincubator-image-zoom"
    aria-label={`Open full-size image: ${alt || "image"}`}
  >
    <img
      {...props}
      alt={alt}
      className={["jincubator-image-zoom__image", className].filter(Boolean).join(" ")}
      style={{ maxWidth: "100%", height: "auto", ...style }}
    />
    <span className="jincubator-image-zoom__indicator" aria-hidden="true" />
  </button>
);
