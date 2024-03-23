import Card from "./Card";
import "./App.css";
import Navbar from "./Navbar";
import Photo from "./Photo";
import swimmer from "./assets/swimmer.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <Photo />
      <Card
        img={swimmer}
        rating="4.8"
        reviewCount={12}
        country="USA"
        description="Swimming lessons with professional swimmer"
        price={155}
      />
    </div>
  );
}

export default App;
