import React from 'react'

export default function MealCard({title, image, price}) {
    

    return (
        <div className="meal-item">
            <article>
                <img src={image} alt={title}/>
                <h3>{title}</h3>
                <div className="meal-item-price">{price}</div>
                <button className="meal-item-action">Add to cart</button>
            </article>
        </div>
    )
}
