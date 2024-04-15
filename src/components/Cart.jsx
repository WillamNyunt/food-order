import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cart-context'
import { ModalContext } from '../context/modal-context'

export default function Cart(props) {
    const cartCtx = useContext(CartContext)
    const modalCtx = useContext(ModalContext)

    const itemIncrementHandler = (item) => {
        cartCtx.dispatchCartItems({type: 'ADD_ITEM', payload: item})
    }   

    const itemDecrementHandler = (item) => {
        cartCtx.dispatchCartItems({type: 'REMOVE_ITEM', payload: item.id})
    }

    return (
        <div className='cart'>
            <h2>Cart</h2>
            {cartCtx.items.amount === 0 && <p>No items in cart</p>}
            {cartCtx.items.types &&
                <ul>{
                    cartCtx.items.types.map(item => {
                        return (
                            <li key={item.id} className='cart-item'>
                                <h3>{item.name}</h3>
                                <div className='cart-item-price'>£ {item.price}</div>
                                <div className='cart-item-quantity'>{item.quantity}</div>
                                <div className='cart-item-actions'>
                                    <button onClick={() => itemDecrementHandler(item)}>-</button>
                                    {item.amount}
                                    <button onClick={() => itemIncrementHandler(item)}>+</button>
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
            <button className='button' onClick={() => cartCtx.dispatchCartItems({type: 'CLEAR'})}>Clear Cart</button>
                <button className='button' onClick={() => modalCtx.dispatchModal({type: 'SET_TYPE', payload: 'CHECKOUT'}) }>Proceed to checkout</button>
            </div>
            <button className='button' onClick={() => modalCtx.dispatchModal({type: 'CLOSE'})}>Cancel</button>
        </div>
    )
}
