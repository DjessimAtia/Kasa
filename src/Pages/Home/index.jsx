import React from "react";
import "../../sass/app.scss";
import Banner from "../../Components/Banner/index";
import "../Home/home.scss";
import data from "../../data/data.json";
import Card from "../../Components/Card";
import "../../Components/Card/card.scss";

function Home() {
  return (
    <div className="container">
      <Banner
        imagePath="images/banniere1.png"
        text="Chez vous, partout et ailleurs"
      />
      <div className="card_tableau">
        {/* Mapping des données pour afficher les appartements */}
        {data.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
