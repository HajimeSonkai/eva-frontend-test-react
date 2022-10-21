import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";

const Destaquebycat = (props) => {
  const { products, categorie, allproducts } = props;
  const [productsbycatdestac, setproductsbycatdestac] = useState();

  useEffect(() => {
    categorietoproductmap(products, allproducts);
  }, [products, allproducts]);

  const categorietoproductmap = async (products, allproducts) => {
    const mainprodcs = [];

    await products.map((prod) => {
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
      {productsbycatdestac
        ? productsbycatdestac.map((product, index) => {
            return <Productcard key={index} product={product} />;
          })
        : "carregando"}
    </div>
  );
};

export default Destaquebycat;
