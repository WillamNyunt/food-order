import React, {useContext} from 'react'

export default function MealCard({id, title, image, price, description, addItemToCart}) {

    return (
        <div className="meal-item">
            <article>
                <img src={'http://localhost:3000/' + image} alt={title}/>
                <h3>{title}</h3>
                <div className="meal-item-price"><p>{price}</p></div>
                <div className='meal-item-description'>{description}</div>
                <div className='cart-item-actions'>
                     <button onClick={addItemToCart}>Add to cart</button>
                </div>
            </article>
        </div>
    )
}
