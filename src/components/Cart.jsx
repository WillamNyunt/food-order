import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cart-context'


export default function Cart(props) {
    const cartCtx = useContext(CartContext)

    return (
        <div className='cart'>
            <h2>Cart</h2>
            {cartCtx.items.amount === 0 && <p>No items in cart</p>}
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
            <div className='cart-total'>
                <h4>Total Amount</h4>
                {cartCtx.totalPrice > 0 ? <span>£{cartCtx.totalPrice}</span> : <div>£0</div>}
            </div>
            <div className='cart-actions'>
                <button>Proceed to checkout</button>
                <button onClick={cartCtx.clearCart}>Clear Cart</button>
            </div>
        </div>
    )
}
