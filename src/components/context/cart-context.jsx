import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContextDefaultValues = {
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {}
};


const CartContext = createContext(CartContextDefaultValues);


export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCartHandler = (item) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = [...prevCartItems];
            const existingCartItem = updatedCartItems.find((cartItem) => cartItem.id === item.id);
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + item.amount
                };
                const existingCartItemIndex = updatedCartItems.findIndex((cartItem) => cartItem.id === item.id);
                updatedCartItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedCartItems.push(item);
            }
            return updatedCartItems;
        });
    };

    const removeItemFromCartHandler = (id) => {
        setCartItems((prevCartItems) => {
            const existingCartItem = prevCartItems.find((cartItem) => cartItem.id === id);
            const existingCartItemIndex = prevCartItems.findIndex((cartItem) => cartItem.id === id);
            if (existingCartItem.amount === 1) {
                return prevCartItems.filter((cartItem) => cartItem.id !== id);
            } else {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount - 1
                };
                prevCartItems[existingCartItemIndex] = updatedItem;
                return prevCartItems;
            }
        });
    };

    const clearCartHandler = () => {
        setCartItems([]);
    };

    const getTotalAmount = () => {
        const totalAmount = cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.price * cartItem.amount;
        }, 0);
        return totalAmount.toFixed(2);
    };

    const cartContextProviderValues = {
        items: cartItems,
        totalAmount: getTotalAmount(),
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
    };

    return (
        <CartContext.Provider value={cartContextProviderValues}>
            {children}
        </CartContext.Provider>
    );
}



