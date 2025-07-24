import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export const ZoomImage = (props: Props) => (
  <Zoom>
    <img
      {...props}
      style={{ maxWidth: "100%", height: "auto", ...props.style }}
    />
  </Zoom>
);
