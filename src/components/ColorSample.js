import React from "react";

export default function ColorSample({ color, id }) {
  return (
    <div
      className="ColorSample"
      key={id}
      style={{
        backgroundColor: color
      }}
    >
      <p className="color-sample-details">{color}</p>
    </div>
  );
}
