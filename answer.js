import {data} from "./data.js" ;

//1 list out all the food items 
function allFoodItems(data){
    for(let i = 0 ; i < data.length ; i++ )
    {
        console.log(data[i]) ;
    }

}

// 2list all the items acc to their category
function listFoodItemsByCategory(foodData,category){
    const filteredItem = foodData.filter(item => category===item.category) ;
    for(let i = 0 ; i < filteredItem.length ;i++)
    {
        console.log(filteredItem[i]) ;
    }
}

//list all the items whose calories are below 100 
function calorieBelow100(foodData){
    const filteredItem = foodData.filter(item => item.calorie < 100) ;
    for(let i = 0 ; i < filteredItem.length ;i++)
    {
        console.log(filteredItem[i]) ;
    }
}

//calorie above 100 
function calorieAbove100(foodData){
    const filteredItem = foodData.filter(item => item.calorie > 100) ;
    for(let i = 0 ; i < filteredItem.length ;i++)
    {
        console.log(filteredItem[i]) ;
    }
}





//allFoodItems(data);
//listFoodItemsByCategory(data,"Vegetable") ;
//calorieBelow100(data) ;
//calorieAbove100(data) ;


//descending order of protiens 
const sortedData = [...data] ;
sortedData.sort((a,b)=> b.protiens - a.protiens) ;
for(let i = 0 ; i < sortedData.length ;i++)
{
    console.log(sortedData[i]) ;
}

//ascending order of protiens 
const sortedData2 = [...data] ;
sortedData2.sort((a,b)=> a.protiens - b.protiens) ;
for(let i = 0 ; i < sortedData2.length ;i++)
{
    console.log(sortedData2[i]) ;
}

