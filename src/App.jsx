import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";
import Photo from "./Photo";
import Data from "./Data";

function App() {
  const cards = Data.map((item) => {
    return (
      <div>
        <Card
          key={item.id}
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
          openSpots={item.openSpots}
        />
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <Photo />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
