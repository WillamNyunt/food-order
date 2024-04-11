import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cart-context'


export default function Cart(props) {
    const cartCtx = useContext(CartContext)

    return (
        <div className='cart'>
            <h2>Cart</h2>
            {cartCtx && 
                <ul>{
                cartCtx.items.map(item => {
                    return (
                        <li key={item.id} className='cart-item'>
                            <h3>{item.name}</h3>
                            <div className='cart-item-price'>{item.price}</div>
                            <div className='cart-item-quantity'>{item.quantity}</div>
                            <div className='cart-item-actions'>
                                <button>-</button>
                                <button>+</button>
                            </div>
                        </li>
                    )
                })
            }</ul>
            }
        </div>
    )
}
