import React, { useState, useEffect } from "react";

import MainCard from "./components/MainCard";

import "./App.css";
import GalleryContainer from "./containers/GalleryContainer";

const newPalette = {
  colors: ["#f5441a", "#fbd273", "#12176e", "#b24f94", "#d3a7d7", "#4c3f25"],
  imageUrl: "https://i.imgur.com/bTqsPlA.jpg",
};

const palettesUrl = "http://localhost:3000/palettes/";

export default function App() {
  const [palettes, setPalettes] = useState([]);
  const [mainPalette, setMainPalette] = useState(null);

  const addPalette = (palette) => {
    console.log("setting palettes", palette);
    setMainPalette(palette);
    savePalettesToDB(palette);
  };

  const toggleView = (palette = null) => {
    palette === "newPalette"
      ? setMainPalette(newPalette)
      : setMainPalette(palette);
  };

  const getPalettesFromDB = () => {
    fetch(palettesUrl)
      .then((res) => res.json())
      .then((palettes) => setPalettes(palettes));
  };

  const savePalettesToDB = (palette) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(palette),
    };
    fetch(palettesUrl, options)
      .then((res) => res.json())
      .then((palette) => setPalettes([...palettes, palette]));
  };

  const deletePaletteFromDB = (id) => {
    const options = {
      method: "DELETE",
    };
    fetch(palettesUrl + id, options);
  };

  const removePalette = (event, id) => {
    event.stopPropagation();
    const newPalettes = palettes.filter((palette) => {
      return palette.id !== id;
    });
    setPalettes(newPalettes);

    deletePaletteFromDB(id)
  };

  useEffect(() => {
    getPalettesFromDB();
  }, []);

  return (
    <div className="App">
      {mainPalette ? (
        <MainCard
          palette={mainPalette || newPalette}
          toggleView={toggleView}
          addPalette={addPalette}
        />
      ) : (
        <GalleryContainer
          palettes={palettes}
          toggleView={toggleView}
          removePalette={removePalette}
        />
      )}
    </div>
  );
}
