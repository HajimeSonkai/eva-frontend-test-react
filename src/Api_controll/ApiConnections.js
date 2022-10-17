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

export { getcategories }