import React from "react";
import Productcard from "./Productcard";

const Destaque = (props) => {
  const { products } = props;
  return (
    <div>
      {products.map((product, index) => {
        return <Productcard key={index} product={product} />;
      })}
    </div>
  );
};

export default Destaque;
