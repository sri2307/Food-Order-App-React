import Card from '../UI/Card';
import MealItem from './MealItems/MealItems';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';



const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [httpError,sethttpError]=useState();
  const [isLoading,setisLoading]=useState(true);

  useEffect(() => {
    setisLoading(true);
    const fetchMeals = async () => {
      const response = await fetch('https://react-http-71a5f-default-rtdb.firebaseio.com/meals.json');
      if(!response.ok){
        throw new Error('Something went wrong');
      }
      const responseData = await response.json();
      const loadedMeal = []
      for (const key in responseData) {
        loadedMeal.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })

      }

      setMeals(loadedMeal);
      setisLoading(false);


    }
    fetchMeals().catch(error=>{
      setisLoading(false)
      
      sethttpError(error.message)
    });

  }, [])

  if(isLoading){
    return <section className={classes.MealsLoad}>
      <p>Loading.....</p>
    </section>
  }
  
  if(httpError){
    return <section className={classes.MealsError}>
      <p>{httpError}</p>

    </section>
  }


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