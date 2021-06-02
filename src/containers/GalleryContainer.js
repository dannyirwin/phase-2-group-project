import React from "react";

import GalleryCard from "../components/GalleryCard";

export default function GalleryContainer({ palates, toggleView }) {
  const showGalleryCards = () => {
    return palates.map(palate => (
      <GalleryCard key={palate.id} palate={palate} toggleView={toggleView} />
    ));
  };

  return (
    <div className="Gallery">
      <h1>Gallery</h1>
      {showGalleryCards()}
      <button onClick={() => toggleView("newPalate")}>
        {palates.length === 0 ? "Add Palate" : "Add New Palate"}
      </button>
    </div>
  );
}
