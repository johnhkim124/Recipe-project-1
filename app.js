const app_key = `7c0a31766f9ea5c6b5de71b0693ce04d`
const app_id = `c7450847`

const getRecipe = async (foodSearch) => {
  const url = `https://api.edamam.com/search?q=${foodSearch}&app_id=c7450847&app_key=7c0a31766f9ea5c6b5de71b0693ce04d`
  try {
    const response = await axios.get(url);
    // console.log(response);
    let searched = response.data.q;
    // console.log(searched)
    let recipe = response.data.hits[0].recipe
    console.log(recipe);
    renderImg(recipe);
    renderIngredients(recipe);
    renderNutritional(recipe)
  }
  catch (error) {
    console.log(error);
  }
}
getRecipe("fried pickles")
// getRecipe("fried pickles")

//make function that renders data

const renderImg = (recipe) => {
  const recipeImageDiv = document.querySelector(".recipeImg")

  let recipeImg = document.createElement("img");
  recipeImg.setAttribute("src", recipe.image);
  recipeImageDiv.append(recipeImg);
  // console.log(recipeImg)

}

const renderIngredients = (recipe) => {
  const ingredientUl = document.querySelector("ul")
  const ingredientDiv = document.querySelector(".ingredients")

  let foodTitle = document.createElement("h3");
  foodTitle.textContent = recipe.label;
  ingredientDiv.prepend(foodTitle)

  for (let i = 0; i < recipe.ingredientLines.length; i++) {
    let ingredientLi = document.createElement("li")
    ingredientLi.textContent = (recipe.ingredientLines[i])
    ingredientUl.appendChild(ingredientLi);
  }
  const recipeDiv = document.querySelector(".recipe")
  let instructions = document.createElement("a")
  instructions.setAttribute("href", recipe.url)
  instructions.textContent = "Link to instructions"
  recipeDiv.appendChild(instructions)

}

const renderNutritional = (recipe) => {
  const recipeDiv = document.querySelector(".recipe")
  let nutrients = recipe.totalNutrients;

  for (let key in nutrients) {
    let quantity = Math.round(nutrients[key].quantity)
    // console.log(nutrients[key].label)
    // console.log(nutrients[key].quantity)
    // console.log(nutrients[key].unit)

    let nutrientsP = document.createElement("p")
    nutrientsP.textContent = `${nutrients[key].label}: ${quantity} ${nutrients[key].unit}`

    recipeDiv.appendChild(nutrientsP)
  }
}
