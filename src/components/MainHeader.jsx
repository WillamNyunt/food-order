import React from 'react'
import Logo from '../assets/logo.jpg'

export default function MainHeader(props) {

    return (
        <div id='main-header'>
            <div id="title">
                <img src={Logo} title='Meal Logo' />
                <h1>Meal App</h1>
            </div>
            <button>Cart</button>
        </div>
    )
}
