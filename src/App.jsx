import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Photo from "./Photo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Photo />
    </div>
  );
}

export default App;
