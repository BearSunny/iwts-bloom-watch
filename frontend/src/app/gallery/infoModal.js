import React from "react";

const InfoModal = ({ flower, onClose }) => {
  if (!flower) return null;

  return (
    <div className="flex-row text-center w-80 p-4 justify-center bg-secondary">
      <div className="h-full overflow-hidden">
        <button
          onClick={onClose}
          className="mb-4 px-3 py-1 bg-highlight text-white font-bold rounded-3xl self-start"
        >
            Explore other species
        </button>
        <img
          src={flower.image_url}
          alt={flower.name}
          className="w-40 mx-auto mb-3"
        />
        <h2 className="text-lg font-bold mb-2">{flower.name}</h2>
        <p className="italic mb-2"><strong>Scientific Name:</strong> {flower.scientific_name}</p>
        <p className="text-sm mb-2">
          <strong>Origin:</strong> {flower.origin}
        </p>
        <p className="text-sm">
          <strong>Description:</strong> {flower.description}
        </p>
      </div>
    </div>
  );
};

export default InfoModal;
