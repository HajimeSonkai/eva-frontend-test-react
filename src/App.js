import React, { useEffect, useState } from "react";
import Destaque from "./Components/Destaque";
import Destaquebycat from "./Components/Destaquebycat";
import { getcategories, getproducts } from "./Api_controll/ApiConnections";
import "./App.css";
import Header from "./Components/Header";

function App() {
  const [categories, setcategories] = useState();
  const [categoriesdestacs, setcategoriesdestacs] = useState();
  const [products, setproducts] = useState();

  useEffect(() => {
    fetchCategories();
    fetchallproducts();
  }, []);

  const fetchCategories = async () => {
    const plus4cat = [];

    try {
      const fetch = await getcategories();

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
    } catch (error) {
      console.log("getcategories Error:", error);
    }
  };

  const fetchallproducts = async () => {
    try {
      const fetch = await getproducts();

      const promises = fetch.map(async (result) => {
        return await result;
      });

      const results = await Promise.all(promises);

      setproducts(results);
    } catch (error) {
      console.log("setproducts Error:", error);
    }
  };

  return (
    <div className="App">
      {<Header categories={categories} />}
      <div className="app-body">
        <div className="categorie-container">
          <div className="categorie-box">
            <img
              className="categorie-img"
              alt="categoria 1"
              src={require("./images/category-1.jpeg")}
              />
              <p>Livros</p>
          </div>
          <div className="categorie-box">
            <img
              className="categorie-img"
              alt="categoria 1"
              src={require("./images/category-2.jpeg")}
            />
            <p>Escritório</p>
          </div>
          <div className="categorie-box">
            <img
              className="categorie-img"
              alt="categoria 1"
              src={require("./images/category-3.jpeg")}
            />
            <p>Vestuário</p>
          </div>
        </div>

        {products ? <Destaque products={products} /> : "carregando"}

        {categoriesdestacs
          ? categoriesdestacs.map((categorie, index) => {
              return (
                <div key={index}>
                  <Destaquebycat
                    products={categorie[2]}
                    categorie={categorie[1]}
                    allproducts={products}
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
