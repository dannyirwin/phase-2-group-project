import React from "react";
import ColorSample from "./ColorSample";
import { TrashBinOutline, ColorPaletteOutline } from "react-ionicons";

export default function GalleryCard({
  palette,
  toggleView,
  changeTheme,
  removePalette
}) {
  const { id, colors, imageUrl } = palette;

  const showColorSamples = () => {
    return colors.map((color, id) => {
      return <ColorSample color={color} key={id} />;
    });
  };

  return (
    <div className="GalleryCard" key={id} onClick={() => toggleView(palette)}>
      <div className="gallery-image-container">
        <img
          className="gallery-image"
          src={imageUrl}
          alt="Color Extraction BULLSHIT"
        ></img>
      </div>
      <div className="colors-container">{showColorSamples()}</div>
      <button onClick={event => changeTheme(event, colors)}>
        <ColorPaletteOutline className="icon" color="white" />
      </button>
      <button onClick={event => removePalette(event, id)}>
        <TrashBinOutline className="icon" color="white" />
      </button>
    </div>
  );
}
