import React, { useContext } from 'react'
import Logo from '../assets/logo.jpg'
import { CartContext } from '../context/cart-context'

export default function MainHeader(props) {
    const cartCtx = useContext(CartContext)

    return (
        <div id='main-header'>
            <div id="title">
                <img src={Logo} title='Meal Logo' />
                <h1>Meal App</h1>
            </div>
            <button>Cart<span> ({cartCtx.items.length})</span>
            </button>
        </div>
    )
}
