import React from "react";

import GalleryCard from "../components/GalleryCard";

export default function GalleryContainer({ palettes, toggleView }) {
  const showGalleryCards = () => {
    return palettes.map(palette => (
      <GalleryCard key={palette.id} palette={palette} toggleView={toggleView} />
    ));
  };

  return (
    <div className="Gallery">
      <h1>Gallery</h1>
      {showGalleryCards()}
      <button onClick={() => toggleView("newpalette")}>
        {palettes.length === 0 ? "Add palette" : "Add New palette"}
      </button>
    </div>
  );
}
