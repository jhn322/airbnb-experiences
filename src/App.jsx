import { useState } from "react";
import Card from "./Card";
import "./App.css";
import Navbar from "./Navbar";
import Photo from "./Photo";

function App() {
  return (
    <div>
      <Navbar />
      <Photo />
      <Card />
    </div>
  );
}

export default App;
