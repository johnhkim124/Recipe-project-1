# Project Overview

## Recipe Report 

url

## Project Description

A searching website/database where you can search and look up foods or categories of foods you'd like to cook. 
Simply type in the food recipe or food category your looking for and the recipe will show up as well as other information such as nutrional facts. 

## API and Data Sample

https://api.edamam.com/search?q=friedchicken&app_id=c7450847&app_key=7c0a31766f9ea5c6b5de71b0693ce04d 	
 {
    "q": "friedchicken",
    "from": 0,
    "to": 10,
    "more": false,
    "count": 1,
    "hits": [
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_87aa50b56cfded1dbdc67c39678b076a",
                "label": "Oven Deviled Or Oven Friedchicken Recipe",
                "image": "https://www.edamam.com/web-img/421/4210cf582abf90c2c63e5d0ee1af9af0.jpg",
                "source": "Group Recipes",
                "url": "http://www.grouprecipes.com/2850/oven-deviled-or-oven-friedchicken.html",
                "shareAs": "http://www.edamam.com/recipe/oven-deviled-or-oven-friedchicken-recipe-87aa50b56cfded1dbdc67c39678b076a/friedchicken",
                "yield": 6.0,
                "dietLabels": [],
                "healthLabels": [
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "2 (6 oz) containers plain lowfat yogurt",
                    "3 tbsp dijon mustard",
                    "3/4 tsp tabasco",
                    "1/2 tsp salt",
                    "3 - 3 1/2 pounds chicken pieces, rinsed and patted dry",
                    "2 1/2 cups dry bread crumbs",
                    "1 1/2 tsp salt",
                    "1/2 - 3/4 tsp creole seasoning",
                    "1/4 tsp cayenne pepper",
                    "2 tbs olive oil"
                ] 

## Wireframes

https://wireframe.cc/adOufi

### MVP/PostMVP

#### MVP 

- Have working search bar which retrieves data from api.
- Retrieve data from api and implement food recipe.
- Render food recipe. 
- Render food image. 
- Retrieve and render nutrional facts of data. 
- Input checkboxes for ingredients. 

#### PostMVP  

- Category select button 
- Random recipe feature
- Show external links or instructional videos. 
- Style it more in-depth.
- Be able to store or save recipes.

## Project Schedule 

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Finish project application/find good api| Incomplete
|Nov 10| Project Approval/Starting| Incomplete
|Nov 12| Core Structure of HTML/CSS | Incomplete
|Nov 13| Structure js/api rendering data| Incomplete
|Nov 14| MVP completion | Incomplete
|Nov 15| Post/MVP | Incomplete
|Nov 17| Presentations | Incomplete

## Priority Matrix

https://puu.sh/GLNTy/a18a7e0a30.png

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|Structuring HTML | M | 3hrs| hrs | hrs |
|Basic styling CSS| L | 3hrs| hrs | hrs |
|Setting/getting data from api | H | 3hrs| hrs | hrs |
|JS structuring| H | 5hrs| hrs | hrs |
|Rendering data recipe| H | 3hrs| hrs | hrs |
|Rendering images| H | 2hrs | hrs | hrs |
|Advanced styling| L | 3hrs | hrs | hrs |
|Post/MVP| L | 8hrs | hrs | hrs |
| Total | H | 30hrs| hrs | hrs |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
