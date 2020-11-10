# Project Overview

## Chefs Choice

url

## Project Description

A searching website/database where you can search and look up foods or categories of foods you'd like to cook. 
Simply type in the food recipe or food category your looking for and find the recipe you want. 

## API and Data Sample

Specify the API you are using and include a link. Show us a snippet of JSON returned by your API so we know you can access it and get the info you need
https://api.edamam.com/search?q=friedchicken&app_id=c7450847&app_key=7c0a31766f9ea5c6b5de71b0693ce04d 	
```JSON {
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
                ]}

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

https://wireframe.cc/adOufi

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion. 

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Have working search bar which retrieves data from api.
- Retrieve data from api and implement food recipe.
- Render food recipe. 
- Render food image. 
- Retrieve and render nutrional facts of data. 
- Input checkboxes for ingredients. 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*
- Category select button 
- Random recipe feature
- Show external links or instructional videos. 
- Style it more in-depth.
- Be able to store or save recipes.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Finish project application/find good api| Incomplete
|Nov 10| Project Approval thinking about structure | Incomplete
|Nov 12| Core Structure of HTML/CSS | Incomplete
|Nov 13| Structure and work on js/api| Incomplete
|Nov 15| MVP | Incomplete
|Nov 17| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes


## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Students usally put in around 40+ hours into their project 1.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
|Structuring HTML | M | 3hrs| hrs | hrs |
|Basic styling CSS| S | 3hrs| hrs | hrs |
|Setting/getting data from api | H | 3hrs| hrs | hrs |
|JS structuring| H | 5hrs| hrs | hrs |
|Rendering data recipe| H | 3hrs| hrs | hrs |
|Rendering images| H | 2hrs | hrs | hrs |
|Advanced styling| S | 3hrs | hrs | hrs |
|Post/MVP| S | 8hrs | hrs | hrs |
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
