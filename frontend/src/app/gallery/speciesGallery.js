import React from "react";
import { useState } from "react";
import GalleryItem from "./gallleryItem";
import InfoModal from "./infoModal";

let species = [
  {
    name: "California wildrose",
    scientific_name: "Rosa californica",
    origin: "Western North America (California, Oregon, Baja California)",
    description:
      "A native wild rose with pink fragrant blooms and thorny stems. Often used in erosion control and natural landscaping. Symbolizes resilience and natural beauty.",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Rosa_californica_2004-07-20.jpg/1920px-Rosa_californica_2004-07-20.jpg",
  },
  {
    name: "Carolina spiderlily",
    scientific_name: "Hymenocallis occidentalis",
    origin: "Southeastern United States",
    description:
      "A striking perennial with spider-like white flowers and long, narrow petals. Commonly found in moist woodlands and riverbanks. Symbolizes purity and elegance.",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Hymenocallis_occidentalis_Arkansas.jpg/250px-Hymenocallis_occidentalis_Arkansas.jpg",
  },
  {
    name: "Common sunflower",
    scientific_name: "Helianthus annuus",
    origin: "North America",
    description:
      "A tall, iconic plant with large yellow flower heads that follow the sun (heliotropism). Widely cultivated for seeds and oil. Symbolizes warmth, positivity, and admiration.",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/250px-Sunflower_sky_backdrop.jpg",
  },
  {
    name: "Lady tulip",
    scientific_name: "Tulipa clusiana",
    origin: "Native to Iran, Afghanistan, and the Himalayas",
    description:
      "A graceful tulip with slender petals that open into a star-like shape, often bicolored in red and white. Popular in ornamental gardens. Symbolizes grace, elegance, and new beginnings.",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Tulip_Tulipa_clusiana_%27Lady_Jane%27_Rock_Ledge_Flower_2000px.jpg/250px-Tulip_Tulipa_clusiana_%27Lady_Jane%27_Rock_Ledge_Flower_2000px.jpg",
  },
  // {
  //   name: "Woods' rose",
  //   scientific_name: "Rosa woodsii",
  //   origin: "North America (Canada, United States, northern Mexico)",
  //   description:
  //     "A wild rose species with pink flowers and red hips, often forming dense thickets. Provides habitat and food for wildlife. Symbolizes natural harmony and enduring love.",
  //   image_url:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Rosawoodsii.jpg/250px-Rosawoodsii.jpg",
  // },
];

function SpeciesGallery() {
  const [selectedFlower, setSelectedFlower] = useState(null);
  const gallery = species;

  if (selectedFlower)
    return (
      <InfoModal
        flower={selectedFlower}
        onClose={() => setSelectedFlower(null)}
      />
    );
  else
    return (
      <div
        id="side-bar"
        className="flex-row text-center w-64 p-4 justify-center bg-primary"
      >
        <h1 className="font-bold text-2xl"></h1>
        <br></br>
        <h1 className="font-bold text-2xl"> Search for a species </h1>
        <hr></hr>
        <h1> Featured Species</h1>
        <div
          id="side-bar"
          className="flex flex-wrap text-center justify-center"
        >
          {gallery.map((flower, index) => (
            <GalleryItem
              key={index}
              name={flower.name}
              imageUrl={flower.image_url}
              onClick={() => setSelectedFlower(flower)}
            />
          ))}
        </div>
        <div></div>
        <br></br>
        <h1> All Species</h1>
        <hr></hr>
      </div>
    );
}

export default SpeciesGallery;
