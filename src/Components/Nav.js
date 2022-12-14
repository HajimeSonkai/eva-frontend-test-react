import React from "react";

const Nav = (props) => {
  const { categories } = props;
  return (
    <nav>
      <img alt="logo EVA" src={require("../images/logo.png")}></img>

      <div className="dropdown">
        <button className="dropbtn">
          Categorias
          <svg
            className="seta"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="sort-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
            ></path>
          </svg>
        </button>
        <div className="dropdown-content">
          {categories
            ? categories.map((categorie, index) => {
                return (
                  <a href={categorie.name} key={index}>
                    {categorie.name}
                  </a>
                );
              })
            : "carregando"}
        </div>
      </div>

      <form className="search-bar">
        <label className="search-label">
          <input className="search-input"></input>
        </label>
      </form>

      <div className="usuario">Minha Conta
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="ususvg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
      </div>
      <div className="carrinho">Carrinho (2)
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" className="carsvg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
      </div>
    </nav>
  );
};

export default Nav;
