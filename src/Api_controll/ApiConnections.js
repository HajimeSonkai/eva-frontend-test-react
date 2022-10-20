const getcategories = async () => {
    try {
      let url = `https://www.eva-test-api.plataformaeva.com/categories`
      const response = await fetch(url)
      console.log(response)
      return response.json();
    } catch(error) {
      console.log("erro: ", error)
    }
  };

  const getproducts = async () => {
    try {
      let url = `https://www.eva-test-api.plataformaeva.com/products`
      const response = await fetch(url)
      return response.json();
    } catch(error) {
      console.log("erro: ", error)
    }
  };

  const getcategoriebyid = async (id) => {
    try {
      let url = `https://www.eva-test-api.plataformaeva.com/category/${id}`
      const response = await fetch(url)
      return response.json();
    } catch(error) {
      console.log("erro: ", error)
    }
  };

  const getproductbyid = async (id) => {
    try {
      let url = `https://www.eva-test-api.plataformaeva.com/product/${id}`
      const response = await fetch(url)
      return response.json();
    } catch(error) {
      console.log("erro: ", error)
    }
  };

  

export { getcategories, getproducts, getcategoriebyid, getproductbyid }