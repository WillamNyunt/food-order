import React, { useContext, useState } from 'react'
import Logo from '../assets/logo.jpg'
import { CartContext } from '../context/cart-context'
import CartModal from './CartModal'
import { ModalContext } from '../context/modal-context'

export default function MainHeader(props) {
    const cartCtx = useContext(CartContext)
    const modalCtx = useContext(ModalContext)

    return (
        <div id='main-header'>
            <div id="title">
                <img src={Logo} title='Meal Logo' />
                <h1>Meal App</h1>
            </div>
            <button onClick={modalCtx.setModalOpen}>Cart<span> ({cartCtx.items.amount})</span>
            </button>
            <CartModal/>
        </div>
    )
}
