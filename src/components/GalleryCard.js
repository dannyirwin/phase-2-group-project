import React from "react";
import ColorSample from "./ColorSample";

export default function GalleryCard({ palate, toggleView }) {
  const { id, colors, imageUrl } = palate;

  const showColorSamples = () => {
    return colors.map((color, id) => {
      return <ColorSample color={color} key={id} />;
    });
  };

  return (
    <div className="GalleryCard" key={id} onClick={() => toggleView(palate)}>
      <img
        className="gallery-image"
        src={imageUrl}
        alt="Color Extraction BULLSHIT"
      ></img>
      <div className="colors-container">{showColorSamples()}</div>
    </div>
  );
}
