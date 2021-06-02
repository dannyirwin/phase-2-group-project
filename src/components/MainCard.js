import { useEffect, useState } from "react";

import { ColorExtractor } from "react-color-extractor";
import ColorSample from "./ColorSample";

export default function App({ palate, addPalate }) {
  const [colors, setColors] = useState(palate.colors || []);
  const [imageUrl, setImageUrl] = useState(palate.imageUrl || "noUrl");

  const renderColorSamples = () => {
    return colors.map((color, id) => {
      return <ColorSample color={color} />;
    });
  };

  const getColors = newColors => setColors(newColors);

  const handleSubmit = event => {
    event.preventDefault();
    const newUrl = new FormData(event.target).get("imageUrl");
    setImageUrl(newUrl);
  };

  const handleSavePalate = () => {
    console.log("Adding palate", imageUrl);
    addPalate({ colors, imageUrl });
  };

  return (
    <div className="MainCard card">
      <ColorExtractor getColors={getColors}>
        <img src={imageUrl} style={{ width: 700, height: 500 }} />
      </ColorExtractor>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          name="imageUrl"
          placeholder="Image Url you'd like to sample"
          required
        ></input>
        <input type="submit" value="Extract Colors"></input>
        <button onClick={handleSavePalate}>Save Palate</button>
      </form>
      <div className="colors-container">{renderColorSamples()}</div>
    </div>
  );
}
