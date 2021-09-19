import Card from '../UI/Card';
import MealItem from './MealItems/MealItems';
import classes from './AvailableMeals.module.css';
import {useEffect,useState} from 'react';



const AvailableMeals = () => {
  const [meals,setMeals]=useState([]);

useEffect(()=>{
  const fetchMeals=async () => {
    const response=await fetch('https://react-http-71a5f-default-rtdb.firebaseio.com/meals.json');
    const responseData=await response.json();
    const loadedMeal=[]
    for(const key in responseData){
      loadedMeal.push({
        id:key,
        name:responseData[key].name,
        description:responseData[key].description,
        price:responseData[key].price
      })
      
    }
    
    setMeals(loadedMeal);
    
    
  }
  fetchMeals();
},[])
console.log(meals);
  

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;