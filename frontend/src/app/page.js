"use client";
import { useState, useRef } from "react";
import BloomingMap from "./BloomingMap";
import React from "react";
import SideBar from "./sideBar.js";
import NDVIChart from "./chart/NDVIChart";
import DashBoard from "./dashBoard";

export default function Home() {
  const [showSpecies, setShowSpecies] = useState(false);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [showDashBoard, setShowDashBoard] = useState(false);
  const [compareMode, setCompareMode] = useState(null);
  const [showGraph, setShowGraph] = useState(false);
  const [dateRange, setDateRange] = useState({
    start: "2024-01-01",
    end: "2024-12-31",
  });
  const chartRef = useRef(null);

  const handleResetCompareMode = () => {
    setCompareMode(null);
  };

  return (
    <main className="w-full h-screen flex flex-row justify-center">
      <SideBar showSpecies={showSpecies}></SideBar>
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
        <div>
          <img
            src="./comparison.svg"
            className="absolute my-[5px] mx-[25px] w-10 h-[20px]"
            alt="Comparison icon"
          />
          <button
            id="locations"
            onClick={() => setShowCompareModal(true)}
            className="h-[30px] mx-[20px] px-[40px] w-40 bg-primary font-bold text-white text-left rounded-3xl"
          >
            Comparison
          </button>
        </div>
        {/* Farmer's Dashboard*/}

        <div>
          <img
            src="./comparison.svg"
            className="absolute my-[5px] mx-[25px] w-10 h-[20px]"
            alt="Comparison icon"
          />
          <button
            id="locations"
            onClick={() => setShowDashBoard(true)}
            className="h-[30px] mx-[20px] px-[40px] bg-primary font-bold text-white text-left rounded-3xl"
          >
            Farmer's Dashboard
          </button>
        </div>
      </div>

      {showCompareModal && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-[500px] shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Choose Comparison Mode
              </h2>
              <button
                onClick={() => setShowCompareModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) =>
                    setDateRange((prev) => ({ ...prev, start: e.target.value }))
                  }
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) =>
                    setDateRange((prev) => ({ ...prev, end: e.target.value }))
                  }
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  setCompareMode({ type: "global", dateRange });
                  setShowCompareModal(false);
                }}
                className="px-6 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 font-semibold transition-colors"
              >
                🌍 Global NDVI Comparison
              </button>
              <button
                onClick={() => {
                  setCompareMode({ type: "point", dateRange });
                  setShowCompareModal(false);
                }}
                className="px-6 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold transition-colors"
              >
                📍 Compare Two Points
              </button>
              <button
                onClick={() => {
                  setCompareMode({ type: "export", dateRange });
                  setShowCompareModal(false);
                  setShowGraph((prev) => {
                    const next = !prev;
                    return next;
                  });
                }}
                className="px-6 py-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-semibold transition-colors"
              >
                📊 Export Analysis Charts
              </button>
            </div>
          </div>
        </div>
      )}

      <BloomingMap
        compareMode={compareMode}
        onResetCompareMode={handleResetCompareMode}
      />

      {showGraph ? (
        <div className="fixed top-40 inset-auto flex-col text-center align-center justify-center w-150 h-[400px] p-4 pb-15 bg-white rounded-2xl shadow-md">
          <div className="flex w-full justify-between mb-3">
            <button
              className="px-3 py-1 bg-highlight text-white font-semibold rounded-3xl"
              onClick={() => setShowGraph(false)}
            >
              Close
            </button>
            <h1 className="font-bold text-primary mt-3">NDVI Value Chart</h1>
            <button
              className="px-3 py-1 bg-primary text-white font-semibold rounded-3xl"
              onClick={() => chartRef.current?.exportToPNG()}
            >
              Export Graph
            </button>
          </div>
          <NDVIChart ref={chartRef} />
        </div>
      ) : null}
      <DashBoard
        isOpen={showDashBoard}
        onClose={() => setShowDashBoard(false)}
      />
    </main>
  );
}
