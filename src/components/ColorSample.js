import React from "react";

export default function ColorSample({ color, id }) {
  return (
    <div className="ColorSample">
      <div
        className="color-sample-display"
        style={{
          backgroundColor: color
        }}
      >
        <div className="color-sample-details">
          <p>{color}</p>
        </div>
      </div>
    </div>
  );
}
