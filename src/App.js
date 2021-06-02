import React, { useState, useEffect } from "react";

import MainCard from "./components/MainCard";

import "./App.css";
import GalleryContainer from "./containers/GalleryContainer";

const newPalate = {
  colors: ["#f5441a", "#fbd273", "#12176e", "#b24f94", "#d3a7d7", "#4c3f25"],
  imageUrl: "https://i.imgur.com/bTqsPlA.jpg"
};

const palatesUrl = "http://localhost:3000/palates/";

export default function App() {
  const [palates, setPalates] = useState([]);
  const [mainPalate, setMainPalate] = useState(null);

  const addPalate = palate => {
    console.log("setting palates", palate);
    setMainPalate(palate);
    savePalatesToDB(palate);
  };

  const toggleView = (palate = null) => {
    palate === "newPalate" ? setMainPalate(newPalate) : setMainPalate(palate);
  };

  const getPalatesFromDB = () => {
    fetch(palatesUrl)
      .then(res => res.json())
      .then(palates => setPalates(palates));
  };

  const savePalatesToDB = palate => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(palate)
    };
    fetch(palatesUrl, options)
      .then(res => res.json())
      .then(palate => setPalates([...palates, palate]));
  };

  const deletePalateFromDB = id => {
    options = {
      method: "DELETE"
    };
    fetch(palatesUrl + id, options);
  };

  useEffect(() => {
    getPalatesFromDB();
  }, []);

  return (
    <div className="App">
      {mainPalate ? (
        <MainCard
          palate={mainPalate || newPalate}
          toggleView={toggleView}
          addPalate={addPalate}
        />
      ) : (
        <GalleryContainer palates={palates} toggleView={toggleView} />
      )}
    </div>
  );
}
