import React from "react";
import photoGrid from "./assets/grid.png";

const Photo = () => {
  return (
    <main>
      <h1>test</h1>
      <img className="photo-grid" src={photoGrid} alt="grid of photos" />
    </main>
  );
};

export default Photo;
