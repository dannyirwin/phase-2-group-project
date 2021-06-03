import React from "react";
import ColorSample from "./ColorSample";

export default function GalleryCard({ palette, toggleView, removePalette }) {
  const { id, colors, imageUrl } = palette;

  const showColorSamples = () => {
    return colors.map((color, id) => {
      return <ColorSample color={color} key={id} />;
    });
  };

  return (
    <div className="GalleryCard" key={id} onClick={() => toggleView(palette)}>
      <img
        className="gallery-image"
        src={imageUrl}
        alt="Color Extraction BULLSHIT"
      ></img>
      <div className="colors-container">{showColorSamples()}</div>
      <button onClick={(event) => removePalette(event, id)}>X</button>
    </div>
  );
}
