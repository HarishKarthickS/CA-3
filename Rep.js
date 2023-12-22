// creating variables
const randomMealDiv=document.getElementById("Random_meal");
const ingredient=document.getElementById("ingredient");
const ingredientBody=document.getElementById("ingredient_body");
const searchButton=document.getElementById("search-button");
const searchCategoryDiv=document.getElementById("searchcategory-div");
const videoback=document.getElementById("myVideo");
const bodyPara=document.getElementById("bodyPara");
const categoryName=document.getElementById("categoryName");
let result = '';
let searchCategory='Seafood';
var temp='';
var foodImg='';
var foodName='';
var ingredientli='';
var ingredientTitle='';
var youtubeDiv='';
var resultcategory='';
var resultRandomMeal='';
var x = window.matchMedia("(max-width: 600px)")
// Fetching RandomMeal from the api and asign value to the variable .
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((data) => {
        resultRandomMeal = data.meals[0]; 
        console.log("result1:",resultRandomMeal)
        function getMealingredient(){
            ingredient.innerHTML='<img src="./img/image 2.png" alt="exit-icon" id="exit-icon">'
            const createfoodimg=document.createElement('img');
            createfoodimg.setAttribute('src',resultRandomMeal.strMealThumb);
            createfoodimg.setAttribute('alt','food-img');
            createfoodimg.setAttribute('id','food-img');
        
            const createfoodname=document.createElement('h1');
            createfoodname.setAttribute('id','food-name');
            createfoodname.innerHTML=resultRandomMeal.strMeal;
        
            var length=0;
            const createIngredientList=document.createElement('ul')
            createIngredientList.setAttribute('id','ingredient_li')
            for (let i = 1; i < 21; i++) {
                var ingredients=resultRandomMeal["strIngredient"+i];
                var measure=resultRandomMeal["strMeasure"+i];
                console.log(ingredients,"-",measure);
                if(ingredients != ''){
                console.log(ingredients,"-",measure);
                createIngredientList.innerHTML+='<li>'+ingredients+'-'+measure+ '</li>';
                length+=1;
                }
                else{
                    break;
                }
            }
            
            const createIngredient=document.createElement('h3')
            createIngredient.setAttribute('id','ingredient_title')
            createIngredient.innerText='Ingredient:';
        
            const createYoutubeDiv=document.createElement('div')
            createYoutubeDiv.setAttribute('id','youtube-div')
            createYoutubeDiv.innerHTML+='<img src="./img/image 3.png" alt="youtue-icon">';
            createYoutubeDiv.innerHTML+='<h4>How to Cook</h4>';
            createYoutubeDiv.innerHTML+='<div></div>';

            ingredient.append(createfoodimg);
            ingredient.append(createfoodname);
            ingredient.append(createIngredient);
            ingredient.append(createIngredientList);
            ingredient.append(createYoutubeDiv);
            ingredient.style.height=((length+4)*5)+'%';
            createYoutubeDiv.onclick= ()=>{
                window.open(resultRandomMeal.strYoutube)
            }
            function widthFunction(index){
                ingredient.style.width=(length*index)+'%';
                
            }
            
            x.addEventListener('change',function(){
                widthFunction(7);
            });
            foodImg=document.getElementById("food-img");
            foodName=document.getElementById("food-name");
            ingredientli=document.getElementById("ingredient_li");
            ingredientTitle=document.getElementById("ingredient_title");
            youtubeDiv=document.getElementById("youtube-div");
            const exitIcon=document.getElementById("exit-icon");
            exitIcon.onclick= ()=>{
                ingredientBody.style.visibility='hidden';
            }
            widthFunction(3)
        
        }
        function getRandomMeal(){
            console.log(resultRandomMeal)
            console.log(resultRandomMeal.strMeal)
        
            const createfoodimg=document.createElement('img');
            createfoodimg.setAttribute('src',resultRandomMeal.strMealThumb);
            createfoodimg.setAttribute('alt','food-img');
            createfoodimg.setAttribute('id','food-img');
        
            const createfoodname=document.createElement('h1');
            createfoodname.setAttribute('id','food-name');
            createfoodname.innerHTML=resultRandomMeal.strMeal;
        
            randomMealDiv.append(createfoodimg);
            randomMealDiv.append(createfoodname);
        }
        getRandomMeal()
        randomMealDiv.onclick= ()=>{
            ingredientBody.style.visibility='visible';
            getMealingredient()
        }
})

// getRandomMeal function is used to add 
searchButton.onclick=()=>{
   searchCategory=document.getElementById("search").value;
   fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+searchCategory)
        .then((response) => response.json())
        .then((data) => {
        resultcategory=data.meals;
        console.log(resultcategory)
        resultcategory.forEach(everymeal);
        click();
})
searchCategoryDiv.innerHTML='<h2>Name of the Category :'+searchCategory+'</h2>';
function everymeal(item, index){
    const categorymeal=document.createElement('div');
    categorymeal.setAttribute('class','categorymeal');
    categorymeal.setAttribute('id','categorymeal'+index);
    categorymeal.innerHTML+='<img id="categoryMealImg" src="'+item.strMealThumb+'" alt="'+item.strMeal+'-img">'
    categorymeal.innerHTML+='<h1 id="categoryMealName">'+item.strMeal+'</h1>'
    console.log(item.strMeal);
    searchCategoryDiv.append(categorymeal);
}
}

fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((response) => response.json())
        .then((data) => {
        resultcategory=data.meals;
        console.log(resultcategory)
        resultcategory.forEach(everymeal);
        click();
})
searchCategoryDiv.innerHTML='<h2>Name of the Category :Seafood</h2>';
function everymeal(item, index){
    const categorymeal=document.createElement('div');
    categorymeal.setAttribute('class','categorymeal');
    categorymeal.setAttribute('id','categorymeal'+index);
    categorymeal.innerHTML+='<img id="categoryMealImg" src="'+item.strMealThumb+'" alt="'+item.strMeal+'-img">'
    categorymeal.innerHTML+='<h1 id="categoryMealName">'+item.strMeal+'</h1>'
    console.log(item.strMeal);
    searchCategoryDiv.append(categorymeal);  
}

function getMealIngredient(index){
    result=resultcategory[index]
    console.log(result.idMeal)
    ingredient.innerHTML='<img src="./img/image 2.png" alt="exit-icon" id="exit-icon">'
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+result.idMeal)
        .then((response) => response.json())
        .then((data) => {
        result=data.meals;result = data.meals[0]; 
        console.log("result1:",result)
    
    
    const createfoodimg=document.createElement('img');
    createfoodimg.setAttribute('src',result.strMealThumb);
    createfoodimg.setAttribute('alt','food-img');
    createfoodimg.setAttribute('id','food-img');

    const createfoodname=document.createElement('h1');
    createfoodname.setAttribute('id','food-name');
    createfoodname.innerHTML=result.strMeal;
    var ingredienttuple=result;
    console.log(ingredienttuple)
    var length=0;
    const createIngredientList=document.createElement('ul')
    createIngredientList.setAttribute('id','ingredient_li')
    for (let i = 1; i < 21; i++) {
        var ingredients=ingredienttuple["strIngredient"+i];
        var measure=ingredienttuple["strMeasure"+i];
        console.log(ingredients,"-",measure);
        if(ingredients != ''){
        console.log(ingredients,"-",measure);
        createIngredientList.innerHTML+='<li>'+ingredients+'-'+measure+ '</li>';
        length+=1;
        }
        else{
            break;
        }
    }
    
    const createIngredient=document.createElement('h3')
    createIngredient.setAttribute('id','ingredient_title')
    createIngredient.innerText='Ingredient:';

    const createYoutubeDiv=document.createElement('div')
    createYoutubeDiv.setAttribute('id','youtube-div')
    createYoutubeDiv.innerHTML+='<img src="./img/image 3.png" alt="youtue-icon">';
    createYoutubeDiv.innerHTML+='<h4>How to Cook</h4>';
    createYoutubeDiv.innerHTML+='<div></div>';
    ingredient.append(createfoodimg);
    ingredient.append(createfoodname);
    ingredient.append(createIngredient);
    ingredient.append(createIngredientList);
    ingredient.append(createYoutubeDiv);
    ingredient.style.height=((length+4)*5)+'%';
    function widthFunction(index){
        ingredient.style.width=(length*index)+'%';
        console.log(length*index)
    }
    
    x.addEventListener('change',function(){
        widthFunction(8);
    });
    console.log()
    createYoutubeDiv.onclick= ()=>{
        window.open(result.strYoutube)
    }
    widthFunction(3);
    foodImg=document.getElementById("food-img");
    foodName=document.getElementById("food-name");
    ingredientli=document.getElementById("ingredient_li");
    ingredientTitle=document.getElementById("ingredient_title");
    youtubeDiv=document.getElementById("youtube-div");
    const exitIcon=document.getElementById("exit-icon");
    exitIcon.onclick= ()=>{
        ingredientBody.style.visibility='hidden';
    }
})
}
function click(){
console.log("hi",result[0]);
const item0=document.getElementById("categorymeal0")
const item1=document.getElementById("categorymeal1")
const item2=document.getElementById("categorymeal2")
const item3=document.getElementById("categorymeal3")
const item4=document.getElementById("categorymeal4")
const item5=document.getElementById("categorymeal5")
const item6=document.getElementById("categorymeal6")
const item7=document.getElementById("categorymeal7")
const item8=document.getElementById("categorymeal8")
const item9=document.getElementById("categorymeal9")
const item10=document.getElementById("categorymeal10")
const item11=document.getElementById("categorymeal11")
const item12=document.getElementById("categorymeal12")
const item13=document.getElementById("categorymeal13")
const item14=document.getElementById("categorymeal14")
const item15=document.getElementById("categorymeal15")
const item16=document.getElementById("categorymeal16")
const item17=document.getElementById("categorymeal17")
const item18=document.getElementById("categorymeal18")
const item19=document.getElementById("categorymeal19")
const item20=document.getElementById("categorymeal20")
item0.onclick= ()=>{
    getMealIngredient(0);
    ingredientBody.style.visibility='visible';
    document.documentElement.scrollTop = 0;
}
item1.onclick= ()=>{
    getMealIngredient(1)
    ingredientBody.style.visibility='visible';
}
item2.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(2)
    ingredientBody.style.visibility='visible';
}
item3.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(3)
    ingredientBody.style.visibility='visible';
}
item4.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(4)
    ingredientBody.style.visibility='visible';
}
item5.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(5)
    ingredientBody.style.visibility='visible';
}
item6.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(6)
    ingredientBody.style.visibility='visible';
}
item7.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(7)
    ingredientBody.style.visibility='visible';
}
item8.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(8)
    ingredientBody.style.visibility='visible';
}
item9.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealingredient(9)
    ingredientBody.style.visibility='visible';
}
item10.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(10)
    ingredientBody.style.visibility='visible';
}
item11.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(11)
    ingredientBody.style.visibility='visible';
}
item12.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(12)
    ingredientBody.style.visibility='visible';
}
item13.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(13)
    ingredientBody.style.visibility='visible';
}
item14.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(14)
    ingredientBody.style.visibility='visible';
}
item15.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(15)
    ingredientBody.style.visibility='visible';
}
item16.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(16)
    ingredientBody.style.visibility='visible';
}
item17.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(17)
    ingredientBody.style.visibility='visible';
}
item18.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(18)
    ingredientBody.style.visibility='visible';
}
item19.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(19)
    ingredientBody.style.visibility='visible';
}
item20.onclick= ()=>{
    document.documentElement.scrollTop = 0;
    getMealIngredient(20)
    ingredientBody.style.visibility='visible';
}
}
