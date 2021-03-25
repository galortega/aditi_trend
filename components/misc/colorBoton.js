import React, { Fragment } from "react";
import { Button as AntButton } from "antd";
import { ColorFigure } from "./colorCircle";

export const ColorBoton = ({
  classNames,
  color,
  colour,
  handleColor,
  borderRadius,
  index,
  text
}) => (
  <AntButton
    key={index}
    shape="circle"
    onClick={(e) => (handleColor ? handleColor(color) : console.log())}
    size={colour !== color ? "small" : "middle"}
    className={"my-auto p-0 fluid" + classNames}
    ghost
  >
    <ColorFigure color={color} borderRadius={borderRadius} text={text} />
  </AntButton>
);
