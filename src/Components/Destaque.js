import React from "react";
import Productcard from "./Productcard";

const Destaque = (props) => {
  const slideLeft = () => {
    const slider = document.getElementById("destaque")
    console.log(slider)
    slider.scrollBy(-1000, 0)
  }

  const slideRight = () => {
    const slider = document.getElementById("destaque")
    console.log(slider)
    slider.scrollBy(1000, 0)
  }

  const { products } = props;
  return (
    <div>
      <h3>Destaques</h3>
    <div className="container">
      <button className="arrow-left" onClick={slideLeft} >{"<"}</button>
      <button className="arrow-right" onClick={slideRight}>{">"}</button>
      <div id="destaque" className="gallery-wrapper">
        <div className="gallery">
          {products.map((product, index) => {
            return <Productcard key={index} product={product} />;
          })}
        </div>
      </div>
    </div>

    </div>
  );
};

export default Destaque;
