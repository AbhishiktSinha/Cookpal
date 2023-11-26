const recipeCardsContainer = document.querySelector(".recipies-cards-outer-container");

const recipeArray = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?Vegetarian+meal",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?grilled+chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?Hot+pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?grilled+salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?tomato+pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?fried+Chicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?mushroom-risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?bbq-ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?tacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolate%20Cake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

const recipeNodeArray = [];
const recipeCardsMap = {};

const searchParameters = {
    searchInput: "",
    ratingAbove4: false,
    ratingBelow4: false,
    selectedCategory : "all",

    allFiltersSelected : function() {return (this.ratingAbove4 && this.ratingBelow4)},
    noFilterSelcted : function() {return ((this.ratingAbove4 || this.ratingBelow4) === false);}
}

recipeArray.forEach(createRecipeNodes);

function createRecipeNodes(cardObject) {

    const recipeCard = document.createElement("div");
    recipeCard.className = "recipe-card";

    const recipeCardImageContainer = document.createElement("div");
    recipeCardImageContainer.className = "recipe-card-image-container";
    recipeCardImageContainer.style.backgroundImage = `url(${cardObject.imageSrc})`;

    recipeCard.appendChild(recipeCardImageContainer);


    const recipeCardBottomContainer = document.createElement("div");
    recipeCardBottomContainer.className = "recipe-card-bottom-container";

    const tag = document.createElement("div");
    tag.className = "tag";
    tag.innerText = cardObject.type;
    recipeCard.setAttribute("data-recipeType", cardObject.type);

    const cardRow1 = document.createElement("div");
    cardRow1.className = "card-row-1";

    const cardTitle = document.createElement("span");
    cardTitle.className = "card-title";
    cardTitle.innerText = cardObject.name;

    const cardRating = document.createElement("div");
    cardRating.className = "card-rating";
        const ratingStars = document.createElement("span");
        ratingStars.className = "material-symbols-outlined";
        ratingStars.innerText = "star";
    cardRating.appendChild(ratingStars);
        const ratingValue = document.createElement("span");
        ratingValue.innerText = cardObject.rating;
    cardRating.appendChild(ratingValue);

    cardRow1.append(cardTitle, cardRating);
    recipeCard.title = cardObject.name;

    const cardRow2 = document.createElement('div');
    cardRow2.className = "card-row-2";
    const timeReq = document.createElement("div");
    timeReq.className = "time-required";
    timeReq.innerText = cardObject.time;

    const cardActions = document.createElement("div");
    cardActions.className = "card-actions";
    const likeButton = document.createElement("span");
    likeButton.className = "material-symbols-outlined";
    likeButton.innerText = "favorite";
    likeButton.setAttribute("data-like_for", cardObject.name);

    const reviewButton = document.createElement("span");
    reviewButton.className = "material-symbols-outlined";
    reviewButton.innerText = "mode_comment";
    cardActions.append(likeButton, reviewButton);
    cardRow2.append(timeReq, cardActions);

    recipeCardBottomContainer.append(tag, cardRow1, cardRow2);
    recipeCard.appendChild(recipeCardBottomContainer);    

    // recipeNodeArray.push({
    //     name: cardObject.name,
    //     node: recipeCard,
    //     rating: Number(cardObject.rating),
    // });

    cardObject['node'] = recipeCard;

    recipeCardsMap[cardObject.name] = recipeCard;

    recipeCard.addEventListener("click", (event) => {

        if (event.target.innerText === "favorite") {
            // const cardParent = event.target.parentNode.parentNode.parentNode.parentNode;
            // const cardParent = recipeCardsMap[event.target.getAttribute("data-like_for")];
            const cardArrayElement = recipeArray.find((element)=>{
                return( element.name === event.target.getAttribute("data-like_for"));
            })
            const isLiked = cardArrayElement.isLiked;

            if (isLiked === false) {
                event.target.style.color = "#dc582a";
                cardArrayElement.isLiked = true;
            }
            else if (isLiked === true) {
                event.target.style.color = "#252525";
                cardArrayElement.isLiked = false;
            }
        }
    });

}


const searchBar = document.querySelector("#search-recipies");

function updateSearchParameters(value) {
    if(value === "default") {
        searchParameters.searchInput = searchBar.value;
        searchParameters.ratingAbove4 = false;
        searchParameters.ratingBelow4 = false;
        searchParameters.selectedCategory = "all"
    }
    else {
        searchParameters.searchInput = searchBar.value;
        searchParameters.ratingAbove4 = ratingCheckBoxAbove4.checked;
        searchParameters.ratingBelow4 = ratingCheckBoxBelow4.checked;
        searchParameters.selectedCategory = value;
    }
}

searchBar.addEventListener("input", (event)=>{
    console.log(searchBar.value);
    updateSearchParameters("default");
    displayRecipeCards(searchParameters);
});

const searchForm = document.querySelector(".search-input-form");
searchForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    updateSearchParameters("all");
    displayRecipeCards(searchParameters);
})

const ratingCheckBoxAbove4 = document.querySelector("#rating-above4"); ratingCheckBoxAbove4.addEventListener("input", ifChecked);
const ratingCheckBoxBelow4 = document.querySelector("#rating-below4"); ratingCheckBoxBelow4.addEventListener("input", ifChecked);

function ifChecked(event) {
    console.log(event.target);
    updateSearchParameters(searchParameters.selectedCategory);
    displayRecipeCards(searchParameters);
}

const categoriesButtonsArray = Array.from(document.querySelectorAll(".categories-button"));

categoriesButtonsArray.forEach((button)=>{

    button.addEventListener("click", buttonSelected);

    function buttonSelected(event) {

        if (searchParameters.selectedCategory === this.getAttribute("data-Category")) {
            // already selected -----> deselect and lower
            updateSearchParameters("all");
            this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            this.style.boxShadow = "none";
            this.style.transform = `translateY(0px)`;
        }
        else if (searchParameters.selectedCategory === "all") {
            // none is selected -----------> we have to select and raise
            updateSearchParameters(this.getAttribute("data-Category"));

            this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            this.style.boxShadow = "0 8px 10px #adadad";
            this.style.transform = `translateY(-8px)`;
        }
        else if (this.getAttribute("data-Category") === "all") {
            // reset to all categories -------------> deselect what is selected, and lower it

            const selectedButton = categoriesButtonsArray.find((element) => {
                return (element.getAttribute("data-Category") === searchParameters.selectedCategory);
            });

            console.log(searchParameters.selectedCategory, selectedButton);

            if (selectedButton != undefined) {
                selectedButton.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
                selectedButton.style.boxShadow = "none";
                selectedButton.style.transform = `translateY(0px)`
            }
            updateSearchParameters("all");
        }
        else {
            const selectedButton = categoriesButtonsArray.find((element) => {
                return (element.getAttribute("data-Category") === searchParameters.selectedCategory);
            });

            console.log(searchParameters.selectedCategory, selectedButton);
            selectedButton.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            selectedButton.style.boxShadow = "none";
            selectedButton.style.transform = `translateY(0px)`

            updateSearchParameters(this.getAttribute("data-Category"));
            this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            this.style.boxShadow = "0 8px 10px #adadad";
            this.style.transform = `translateY(-8px)`;
        }

        console.log("clicked: ", event.target, " ", searchParameters.selectedCategory);        
        
        displayRecipeCards(searchParameters);
    }

})


function displayRecipeCards(searchParameters) {
    let search = searchParameters.searchInput.toLowerCase();
    let category = searchParameters.selectedCategory;
    let above4 = searchParameters.ratingAbove4;
    let below4 = searchParameters.ratingBelow4;

    /*
    if(searchParameters.searchInput.length > 0) {
        search = searchParameters.searchInput;
    }
    if(searchParameters.selectedCategory.localeCompare("all") != 0) {
        category = searchParameters.selectedCategory;
    }
    if(searchParameters.ratingAbove4 === true) {
        above4 = true;
    }
    if(searchParameters.ratingBelow4 === true) {
        below4 = true;
    }

    if( search === undefined && category === "all" ) {
        
        if(((above4===false) && (below4===false)) || ((above4===true) && (below4===true))) {

            recipeArray.forEach((element)=>{
                recipeCardsContainer.appendChild(element.node);
            })
        }
    }
    else if(search != undefined) {        
        /* Non empty search value means we have to search in the entire Quasi DB, 
        to do so, clear the current filtered / searched results that are visible and 
        look for matching name occurences in the entire recipeArray
        */

    // clear previous results
    clearSearchResults();

    // enforce new search restrictions
    for( let cardParent of recipeArray ) {
        const cardNode = cardParent.node;

        // 1. Filter by search

        if( cardParent.name.toLowerCase().includes(search) ) {

            console.log(searchParameters.selectedCategory, cardParent.type)
            // 2. Filter by category
            if( category === 'all' || cardParent.type === category) {

                // 3. Filter by rating

                
                console.log("no filter: ",searchParameters.allFiltersSelected() || searchParameters.noFilterSelcted());
                console.log("filter above 4: ",above4 && cardParent.rating >= 4.0);
                console.log("filter below 4: ",below4 && cardParent.rating < 4.0);

                if( (searchParameters.allFiltersSelected()) || (searchParameters.noFilterSelcted()) ) {
                    // all are accepted, or no filter selected

                    // console.log("no card filtered");
                    recipeCardsContainer.appendChild( cardParent.node );
                }
                else {
                    if( above4 && cardParent.rating >= 4.0 ) {
                        console.log("cards 4 and above");
                        recipeCardsContainer.appendChild( cardParent.node );
                    }
                    if( below4 && cardParent.rating < 4.0 ) {
                        console.log("cards below 4");
                        recipeCardsContainer.appendChild( cardParent.node );
                    }
                }                    
            }
        }
    }
    

}

function searchTextFilter(search) {
    const visibleCards = recipeArray.filter((item)=>{
        return item.name.toLowerCase().includes(search.toLowerCase());
    })

    return visibleCards;
}
function clearSearchResults() {
    // get the list of all the children of the card container, and remove first, until list is empty

    while(recipeCardsContainer.children.length > 0){
    recipeCardsContainer.children[0].remove();
}

}

displayRecipeCards(searchParameters);