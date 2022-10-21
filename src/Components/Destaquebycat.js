import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";

const Destaquebycat = (props) => {
  const { products, categorie, allproducts } = props;
  const [productsbycatdestac, setproductsbycatdestac] = useState();

  useEffect(() => {
    categorietoproductmap(products, allproducts);
  }, [products, allproducts]);

  const categorietoproductmap = (products, allproducts) => {
    const mainprodcs = [];

    products.map((prod) => {
      return allproducts.map((allprod) => {
        if (allprod.id === prod.id) {
          mainprodcs.push(allprod);
        }
        return mainprodcs;
      });
    });

    setproductsbycatdestac(mainprodcs);
  };

  return (
    <div>
      <h3>{categorie}</h3>
      {productsbycatdestac.map((product, index) => {
        return <Productcard key={index} product={product} />;
      })}
    </div>
  );
};

export default Destaquebycat;
