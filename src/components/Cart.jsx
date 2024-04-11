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
                    cartCtx.items.types.map(item => {
                        return (
                            <li key={item.id} className='cart-item'>
                                <h3>{item.name}</h3>
                                <div className='cart-item-price'>{item.price}</div>
                                <div className='cart-item-quantity'>{item.quantity}</div>
                                <div className='cart-item-actions'>
                                    <button>-</button>
                                    {item.amount}
                                    <button>+</button>
                                </div>
                            </li>
                        )
                    })
                }</ul>
            }
            {cartCtx.totalPrice > 0 &&
                <div className='cart-total'>
                    <h3>Total Amount</h3>
                    <div>£{cartCtx.totalPrice}</div>
                </div>}
        </div>
    )
}
