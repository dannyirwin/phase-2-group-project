import { useState } from "react";

import { ColorExtractor } from "react-color-extractor";
import ColorSample from "./ColorSample";

export default function App({ palette, addPalette, changeTheme, toggleView }) {
  const [colors, setColors] = useState(palette.colors || []);
  const [imageUrl, setImageUrl] = useState(palette.imageUrl || "noUrl");

  const [hasExtractedColors, setHasExtractedColors] = useState(false);

  const renderColorSamples = () => {
    return colors.map((color, id) => {
      return <ColorSample color={color} key={id} />;
    });
  };

  const getColors = (newColors) => setColors(newColors);

  const handleExtractColors = (event) => {
    event.preventDefault();
    const newUrl = new FormData(event.target).get("imageUrl");
    setImageUrl(newUrl);
    setHasExtractedColors(true);
    changeTheme(event, colors);
  };

  const handleSavePalette = (event) => {
    console.log("Adding palette", imageUrl);
    addPalette({ colors, imageUrl });
    toggleView();
  };

  return (
    <div className="MainCard card">
      <ColorExtractor getColors={getColors}>
        <img
          src={imageUrl}
          style={{ width: 700, height: 500 }}
          alt="the same bullshit"
        />
      </ColorExtractor>
      <form onSubmit={handleExtractColors}>
        <input
          type="url"
          name="imageUrl"
          placeholder="Image Url you'd like to sample"
          required
        ></input>
        <input type="submit" value="Extract Colors"></input>
        {hasExtractedColors ? (
          <input
            type="submit"
            onClick={handleSavePalette}
            value="Save palette"
          ></input>
        ) : null}
      </form>
      <div className="colors-container">{renderColorSamples()}</div>
      <button onClick={() => toggleView()}>Go To Gallery</button>
    </div>
  );
}
