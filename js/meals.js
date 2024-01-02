// console.log('meal');
const loadMeals = (searchText)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals))
}

const displayMeals = meals =>{

    const mealContainer = document.getElementById('meals-container')
    mealContainer.innerHTML = ''
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
       
        <div class="card">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">T${meal.strTags}</p>
            <button onclick ="loadMealDetail(${meal.idMeal})"  type="button" class="btn btn-primary"   data-bs-toggle="modal" data-bs-target="#mealDetails">
            Details
            </button>
          </div>
        </div>
    
        `
        mealContainer.appendChild(mealDiv)
        
    });
   
}


const searchMeal =()=>{
    // console.log('clcik');
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    loadMeals(searchText)

}

const loadMealDetail = idMeal=>{

    console.log(idMeal);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(res=>res.json())
    .then(data=>displayMealDetails(data.meals[0]))

}


const displayMealDetails = meal =>{


    document.getElementById('mealDetailsLabel').innerText = meal.strMeal
    const mealsDetails = document.getElementById('mealDetailsBody')
    
    mealsDetails.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}">
    `

}
loadMeals('fish')