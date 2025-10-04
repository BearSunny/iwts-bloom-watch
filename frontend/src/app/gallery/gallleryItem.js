import React from "react";

const GalleryItem = ({ name, imageUrl, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center w-20 m-2 cursor-pointer hover:scale-105 transition"
    >
      <img src={imageUrl} alt={name} className="w-18 h-auto mb-1" />
      <p className="text-xs text-center">{name}</p>
    </div>
  );
};

export default GalleryItem;
