import React from "react";
import SpeciesGallery from "./gallery/speciesGallery.js"

function SideBar({ showSpecies }) {
  if (showSpecies) return <SpeciesGallery />;
  else
    return (
      <div id="side-bar" className="justify-center w-10 bg-primary duration-500">
        <img src="./bloom.svg" className="h-10" />
      </div>
    );
}

export default SideBar;