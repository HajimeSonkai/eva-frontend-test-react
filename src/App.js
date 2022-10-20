import React, { useEffect, useState } from "react";
import Destaque from "./Components/Destaque";
import Destaquebycat from "./Components/Destaquebycat";
import "./App.css";
import { getcategories, getproducts } from "./Api_controll/ApiConnections";

function App() {
  const [categories, setcategories] = useState();
  const [categoriesdestacs, setcategoriesdestacs] = useState();
  const [products, setproducts] = useState();

  useEffect(() => {
    console.log("Carregando");
    fetchCategories();
    fetchallproducts();
  }, []);

  const fetchCategories = async () => {
    const plus4cat = [];
    try {
      const fetch = await getcategories();
      console.log("getcategoriesresult = ", fetch);
      const promises = fetch.map(async (result) => {
        return await result;
      });
      const results = await Promise.all(promises);
      results.map((categorie) => {
        if (categorie.products.length >= 4) {
          plus4cat.push([categorie.id, categorie.name, categorie.products]);
        }
        return plus4cat;
      });
      setcategoriesdestacs(plus4cat);
      setcategories(results);
      console.log("setcategories = ", results);
    } catch (error) {
      console.log("getcategories Error:", error);
    }
  };

  const fetchallproducts = async () => {
    try {
      const fetch = await getproducts();
      console.log("getproductsresult = ", fetch);
      const promises = fetch.map(async (result) => {
        return await result;
      });
      const results = await Promise.all(promises);
      setproducts(results);
      console.log("setproducts = ", results);
    } catch (error) {
      console.log("setproducts Error:", error);
    }
  };

  return (
    <div className="App">
      <div>Hello World!</div>
      <div>
        {categories
          ? categories.map((categorie, index) => {
              return <div key={index}>{categorie.name}</div>;
            })
          : "carregando"}
      </div>
      <div className="destaques">
        {products ? <Destaque products={products} /> : "carregando"}
      </div>
      <div>
        {categoriesdestacs
          ? categoriesdestacs.map((categorie, index) => {
              return (
                <div className={`destaque-${categorie[1]}`} key={index}>
                  <Destaquebycat
                    products={categorie[2]}
                    categorie={categorie[1]}
                  />
                </div>
              );
            })
          : "carregando"}
      </div>
    </div>
  );
}

export default App;
