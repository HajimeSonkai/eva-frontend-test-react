import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";

const Destaquebycat = (props) => {
  const slideLeft = () => {
    const slider = document.getElementById(categorie)
    console.log(slider)
    slider.scrollBy(-1000, 0)
  }

  const slideRight = () => {
    const slider = document.getElementById(categorie)
    console.log(slider)
    slider.scrollBy(1000, 0)
  }

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
    <div className="container">
      <h1 className="titulo">{`Destaques em ${categorie}`}</h1>
      {productsbycatdestac ? (productsbycatdestac.length >4) ? <button className="arrow-left" onClick={slideLeft}>{"<"}</button> : null
      :null
      }
      {}
      <div id={categorie} className="gallery-wrapper">
        <div className="gallery">
          {productsbycatdestac
            ? productsbycatdestac.map((product, index) => {
              return <Productcard key={index} product={product} />;
            })
            : "carregando"}
        </div>
      </div>
      {productsbycatdestac ? (productsbycatdestac.length >4) ? <button className="arrow-right" onClick={slideRight}>{">"}</button> : null
      :null
      }
    </div>
        
      </div>
  );
};

export default Destaquebycat;
