const app_key = `7c0a31766f9ea5c6b5de71b0693ce04d`
const app_id = `c7450847`

let num = 0;
const getRecipe = async (foodSearch) => {
  const url = `https://api.edamam.com/search?q=${foodSearch}&app_id=c7450847&app_key=7c0a31766f9ea5c6b5de71b0693ce04d`
  try {
    const response = await axios.get(url);
    console.log(response);
    let searched = response.data.q;

    let recipe = response.data.hits[num].recipe
    console.log(recipe);
    removeImage();
    renderImg(recipe);
    renderIngredients(recipe);
    renderNutritional(recipe)
  }
  catch (error) {
    console.log(error);
  }
}


//renders imgs
const renderImg = (recipe) => {
  const recipeImageDiv = document.querySelector(".recipeImg")
  const foodTitleDiv = document.querySelector(".foodTitle")

  let foodTitle = document.createElement("h2");
  foodTitle.textContent = recipe.label;
  foodTitleDiv.appendChild(foodTitle)


  let recipeImg = document.createElement("img");
  recipeImg.setAttribute("src", recipe.image);
  recipeImg.classList.add("imgStyle");

  recipeImageDiv.append(recipeImg);

}
//renders ingredients
const renderIngredients = (recipe) => {

  const ingredientDiv = document.querySelector(".ingredients")

  let ingredients = document.createElement("h3");
  ingredients.textContent = "Ingredients:"
  ingredientDiv.append(ingredients)

  let yield = recipe.yield;
  const yieldP = document.createElement("p");
  yieldP.textContent = `Yield: ${yield}`
  ingredientDiv.appendChild(yieldP);

  let ingredientUl = document.createElement("ul")
  ingredientDiv.appendChild(ingredientUl);

  for (let i = 0; i < recipe.ingredientLines.length; i++) {
    let ingredientLi = document.createElement("li")
    ingredientLi.textContent = (recipe.ingredientLines[i])
    ingredientUl.appendChild(ingredientLi);

    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    ingredientLi.prepend(checkBox)
  }
  const recipeDiv = document.querySelector(".recipe")
  let instructions = document.createElement("a")
  instructions.setAttribute("href", recipe.url)
  instructions.textContent = "Link to instructions"
  ingredientDiv.appendChild(instructions)

}
//renders nutritions
const renderNutritional = (recipe) => {
  const recipeDiv = document.querySelector(".recipe")
  let nutrients = recipe.totalNutrients;
  let yield = recipe.yield;

  const nutrientsTitle = document.createElement("h3")
  const nutrientTitleDiv = document.createElement("div")
  nutrientsTitle.textContent = "Nutrions Facts:"
  nutrientTitleDiv.appendChild(nutrientsTitle)
  recipeDiv.prepend(nutrientTitleDiv)

  for (let key in nutrients) {
    let quantity = Math.round(nutrients[key].quantity)

    let nutrientsP = document.createElement("p")
    nutrientsP.textContent = `${nutrients[key].label}: ${quantity} ${nutrients[key].unit}`

    recipeDiv.appendChild(nutrientsP)
  }
}


const searchButton = document.querySelector("#search")
const searchInput = document.querySelector("input")


searchButton.addEventListener("click", () => {
  const imgDiv = document.querySelector(".recipeImg");
  const ingredientDiv = document.querySelector(".ingredients")
  const recipeDiv = document.querySelector(".recipe")

  console.log(searchInput.value)
  num = 0;
  getRecipe(searchInput.value)

  ingredientDiv.classList.add("blackBorder", "whiteDiv")
  recipeDiv.classList.add("blackBorder", "whiteDiv")

})

const nextButton = document.querySelector("#next")

nextButton.addEventListener("click", () => {
  if (num < 10) {
    num = num + 1;
  }
  getRecipe(searchInput.value);
  return num;

})


const removeImage = () => {
  const imageDiv = document.querySelector(".recipeImg")
  const recipeDiv = document.querySelector(".recipe")
  const ingredientDiv = document.querySelector(".ingredients")
  const titleDiv = document.querySelector(".foodTitle")

  while (imageDiv.firstChild) {
    imageDiv.removeChild(imageDiv.lastChild);
  }

  while (recipeDiv.firstChild) {
    recipeDiv.removeChild(recipeDiv.lastChild);
  }

  while (ingredientDiv.firstChild) {
    ingredientDiv.removeChild(ingredientDiv.lastChild);
  }

  while (titleDiv.firstChild) {
    titleDiv.removeChild(titleDiv.lastChild);
  }

}
