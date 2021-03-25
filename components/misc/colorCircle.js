import React, { Fragment } from "react";

export const ColorFigure = ({ color, text, borderRadius }) => {
  console.log({ text });
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        borderRadius: borderRadius || "50%",
        backgroundColor: color,
        border: "0.1475em solid #0F1C3F"
      }}
    >
      <b style={{ color: !text ? color : "black", fontSize: 10 }}>
        {text || "."}
      </b>
    </div>
  );
};
