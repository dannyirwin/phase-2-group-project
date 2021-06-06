import { useState, useEffect } from "react";

import { ColorExtractor } from "react-color-extractor";
import ColorSample from "./ColorSample";

export default function App({ palette, addPalette, changeTheme, toggleView }) {
  const [colors, setColors] = useState(palette.colors || []);
  const [imageUrl, setImageUrl] = useState(palette.imageUrl || "noUrl");
  const [hasExtractedColors, setHasExtractedColors] = useState(false);

  const showColorSamples = () => {
    return colors.map((color, id) => {
      return (
        <ColorSample
          color={color}
          key={id}
          clipBoardEnabled={false} //TODO: change to true to make clipboard show
        />
      );
    });
  };

  const getColors = newColors => setColors(newColors);

  const handleExtractColors = event => {
    event.preventDefault();
    const newUrl = new FormData(event.target).get("imageUrl");
    setImageUrl(newUrl);
    setHasExtractedColors(true);
  };

  const handleSavePalette = event => {
    addPalette({ colors, imageUrl, isTemplate: false });
    toggleView();
  };

  useEffect(() => {
    changeTheme(null, colors);
  }, [colors]);

  return (
    <div className="MainCard card">
      <a
        className="colorExtractor-container"
        href={imageUrl}
        target="_blank"
        rel="noreferrer"
      >
        <ColorExtractor getColors={getColors}>
          <img
            className="colorExtractor-image"
            src={imageUrl}
            alt="Display of url"
          />
        </ColorExtractor>
      </a>
      {palette.isTemplate ? (
        <form onSubmit={handleExtractColors}>
          <input
            type="url"
            name="imageUrl"
            placeholder="Source Image Url"
            required
          ></input>
          <input
            className="mainCard-button"
            type="submit"
            value="Extract Colors"
          ></input>
          {hasExtractedColors ? (
            <input
              className="mainCard-button"
              type="submit"
              onClick={handleSavePalette}
              value="Save palette"
            ></input>
          ) : null}
        </form>
      ) : null}
      <div className="colors-container">{showColorSamples()}</div>
      <button className="mainCard-button" onClick={() => toggleView()}>
        Go To Gallery
      </button>
    </div>
  );
}
