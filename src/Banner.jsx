import React from "react";



const promotions = [
  { id: 1, title: "Summer Sale!", discount: "Up to 50% off on Electronics", backgroundColor: "#f44336" },
  { id: 2, title: "Fashion Frenzy", discount: "Flat 30% off on Fashion Items", backgroundColor: "#4CAF50" },
  { id: 3, title: "Home Essentials", discount: "Get 25% off on Home Decor", backgroundColor: "#2196F3" },
];

const Banner = () => {
  return (
    <div className="banner-container">
      {promotions.map((promo) => (
        <div className="banner" key={promo.id} style={{ backgroundColor: promo.backgroundColor }}>
          <h2>{promo.title}</h2>
          <p>{promo.discount}</p>
        </div>
      ))}
    </div>
  );
};

export default Banner;
