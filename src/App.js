import React, { useEffect, useState } from 'react';
import './App.css';
import { getcategories } from './Api_controll/ApiConnections';

function App() {
  const [categories, setcategories] = useState();

  useEffect(() => {
    console.log("Carregando");
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const fetch = await getcategories();
      console.log("getcategoriesresult = ", fetch);
      const promises = fetch.map(async (result) => {
        return await result
      });
      const results = await Promise.all(promises);
      setcategories(results)
      console.log("setcategories = " ,results)
    } catch (error) {
      console.log("getcategories Error:", error);
    }
  };

  return (
    <div className="App">
      <div>Hello World!</div>
      <div>{categories ? categories.map((categorie, index) => {
              return <div key={index}>{categorie.name}</div>;
            }) : "carregando"}</div>
    </div>
  );
}

export default App;
