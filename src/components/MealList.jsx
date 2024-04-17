import React, {useContext, useEffect, useState, useCallback} from 'react'
import MealCard from './MealCard'
import { CartContext } from '../context/cart-context'

export default function MealList(props) {
    const [meals, setMeals] = useState([])

    const cartCtx = useContext(CartContext)

    const addItemToCartHandler = useCallback((item) => {
        cartCtx.dispatchCartItems({type: 'ADD_ITEM', payload: item})
    })

    useEffect(() => {
        fetch('http://localhost:3000/meals')
        .then(response => response.json())
        .then(data => {
            setMeals(data)})
    }, [])


    return (
        <div id='meals'>
            {meals.map(meal => {
                return <MealCard key={meal.id} id={meal.id} title={meal.name} image={meal.image} price={meal.price} description={meal.description} addItemToCart={() => addItemToCartHandler(meal)}/>
            })}
        </div>
    )
}
