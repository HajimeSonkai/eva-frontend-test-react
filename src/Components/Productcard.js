import React from "react";
import rater from "../Extras/Starrater";

const Productcard = (props) => {
  const { product } = props;
  const imgsrc = product.images_product.map((img) => {return img.path})
  
  return (
    <div className="product-card">
      <img alt={product.name} src={imgsrc}></img>
      <div>
      {product.name}
      </div>
      <div>
      {rater(product.stars)}
      </div>
      <div>
      {product.promotional_price ? product.promotional_price : product.price}
      </div>
      <div>
      {product.price ? product.price : product.promotional_price}
      </div>
      <button>comprar</button>
    </div>
  );
};

export default Productcard;
