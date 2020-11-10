const app_key = `7c0a31766f9ea5c6b5de71b0693ce04d`
const app_id = `c7450847`

const getRecipe = async (foodSearch) => {
  const url = `https://api.edamam.com/search?q=${foodSearch}&app_id=c7450847&app_key=7c0a31766f9ea5c6b5de71b0693ce04d`
  try {
    const response = await axios.get(url);
    // console.log(response);
    let searched = response.data.q;
    console.log(searched)
  }
  catch (error) {
    console.log(error);
  }
}

getRecipe("fried pickles")
