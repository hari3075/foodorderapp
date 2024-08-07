import React, { useEffect, useState } from 'react'
import classes from './AvailableMeal.module.css'
import Card from '../Ui/Card';
import MealItem from './MealItem/MealItem';
import axios from 'axios'
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
const AvailableMeals = () => {
    const availableMeals=DUMMY_MEALS.map(meal=><MealItem  key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)
    return (
  <section className={classes.meals}>
    <Card>
    <ul>
        {availableMeals}
    </ul>
    </Card>
  </section>
  )
}

export default AvailableMeals
