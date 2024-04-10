import React, {useContext, useEffect, useState} from 'react'
import MealCard from './MealCard'

export default function MealList(props) {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/meals')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setMeals(data)})
    }, [])

    return (
        <div id='meals'>
            {meals.map(meal => {
                return <MealCard key={meal.id} title={meal.name} image={meal.image} price={meal.price} description={meal.description}/>
            })}
        </div>
    )
}
