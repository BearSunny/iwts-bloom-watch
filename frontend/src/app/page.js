"use client";
import BloomingMap from "./BloomingMap";
import React from "react";
import { useState } from "react";
import SideBar from "./sideBar.js";

export default function Home() {
  const [showSpecies, setShowSpecies] = useState(false);
  return (
    <main className="w-full h-screen flex flex-row justify-center">
      <SideBar showSpecies={showSpecies}></SideBar>
      {/* <div id="navigator" className="absolute flex my-[15px] z-1">
        <div>
          <img src="./flower.svg" className="absolute my-[5px] mx-[25px] w-10 h-[20px]"></img>
          <button
            id="species"
            className="h-[30px] mx-[20px] px-[40px] w-40 bg-primary font-bold text-white text-left rounded-3xl"
            onClick={() => {setShowSpecies(!showSpecies), console.log(showSpecies)}}
          >
            Species
          </button>
        </div>
        <div>
          <img src="./comparison.svg" className="absolute my-[5px] mx-[25px] w-10 h-[20px]"></img>
          <button
            id="locations"
            className="h-[30px] mx-[20px] px-[40px] w-40 bg-primary font-bold text-white text-left rounded-3xl"
          >
            Comparison
          </button>
        </div>
      </div> */}

      <div
        id="navigator"
        className={`
          fixed top-[15px] flex z-10 transition-transform duration-300
          ${showSpecies ? "translate-x-[200px]" : "translate-x-[0px]"}
        `}
      >
        {/* Species Button */}
        <div className="relative">
          <img
            src="./flower.svg"
            className="absolute my-[5px] mx-[25px] w-10 h-[20px]"
            alt="flower"
          />
          <button
            id="species"
            className="h-[30px] mx-[20px] px-[40px] w-40 bg-primary font-bold text-white text-left rounded-3xl"
            onClick={() =>
              setShowSpecies((prev) => {
                const next = !prev;
                console.log("Sidebar expanded:", next);
                return next;
              })
            }
          >
            Species
          </button>
        </div>

        {/* Comparison Button */}
        <div className="relative">
          <img
            src="./comparison.svg"
            className="absolute my-[5px] mx-[25px] w-10 h-[20px]"
            alt="comparison"
          />
          <button
            id="locations"
            className="h-[30px] mx-[20px] px-[40px] w-40 bg-primary font-bold text-white text-left rounded-3xl"
          >
            Comparison
          </button>
        </div>
      </div>
      <BloomingMap></BloomingMap>
    </main>
  );
}
