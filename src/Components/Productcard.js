import React from "react";
import rater from "../Extras/Starrater";

const Productcard = (props) => {
  const { product } = props;
  const porcento = (Number(product.promotional_price) / 100 * 90).toFixed(2)
  const imgsrc = product.images_product.map((img) => {return img.path})
  
  return (
    <div className={`item`}>
      <div className="img-box">

      <img className="product-img" alt={product.name} src={imgsrc}></img>
      </div>
      <div className="product-name">
      {product.name}
      </div>
      <div>
      {rater(product.stars)}
      </div>
      <p className="price">
        {`R$ ${product.price ? Number(product.price).toFixed(2) : Number(product.promotional_price).toFixed(2)}`}
      </p>
      <p className="promotional-price">
      {`R$ ${product.promotional_price ? Number(product.promotional_price).toFixed(2) : Number(product.price).toFixed(2)}`}
      </p>
      <p>{`ou R$ ${porcento} com 10% off no boleto`}</p>
      <button>comprar</button>
    </div>
  );
};

export default Productcard;
