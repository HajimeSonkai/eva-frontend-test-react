import React from "react";

const Destaquebycat = (props) => {
  const { products, categorie } = props
    return (
        <div>
            <h3>{categorie}</h3>
            {products.map((product, index) => {
              return <div key={index} >{product.name}</div>;
            })}
        </div>
    )
}

export default Destaquebycat