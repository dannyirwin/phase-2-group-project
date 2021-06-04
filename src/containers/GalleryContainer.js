import React from "react";

import GalleryCard from "../components/GalleryCard";

export default function GalleryContainer({
  palettes,
  toggleView,
  changeTheme,
  removePalette
}) {
  const showGalleryCards = () => {
    return palettes.map(palette => (
      <GalleryCard
        key={palette.id}
        palette={palette}
        toggleView={toggleView}
        removePalette={removePalette}
        changeTheme={changeTheme}
      />
    ));
  };

  return (
    <div className="GalleryContainer">
      <div className="gallery-background">
        {showGalleryCards()}
        <button
          className="new-palette-button"
          onClick={() => toggleView("newPalette")}
        >
          {palettes.length === 0 ? "Create a Palette" : "Add New palette"}
        </button>
      </div>
    </div>
  );
}
