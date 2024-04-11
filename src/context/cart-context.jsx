import React, { createContext, useState, useReducer } from 'react';

const CartContextDefaultValues = {
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {}
};


export const CartContext = createContext(CartContextDefaultValues);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState({
        items: [],
        totalItemAmount: 0
    });

    const addItemToCartHandler = (item) => {
        setCartItems((prevCartItems) => {
            const existingCartItem = prevCartItems.items.find((cartItem) => cartItem.id === item.id);
            const existingCartItemIndex = prevCartItems.items.findIndex((cartItem) => cartItem.id === item.id);
            const updatedCartItems = [...prevCartItems.items];
            
            if (existingCartItem) {
                console.log('aready exists')
                const updatedItem = {
                    ...existingCartItem,
                    totalItemAmount: existingCartItem.totalItemAmount + 1
                };
                updatedCartItems[existingCartItemIndex] = updatedItem;
            } else {
                const newItem = {...item, totalItemAmount: 1};
                updatedCartItems.push(newItem);
            }
            return {
                items: updatedCartItems,
                totalItemAmount: prevCartItems.totalItemAmount + 1
            };
        });
    };

    const removeItemFromCartHandler = (id) => {
        setCartItems((prevCartItems) => {
            const existingCartItem = prevCartItems.find((cartItem) => cartItem.id === id);
            const existingCartItemIndex = prevCartItems.findIndex((cartItem) => cartItem.id === id);
            if (existingCartItem.totalItemAmount === 1) {
                return prevCartItems.filter((cartItem) => cartItem.id !== id);
            } else {
                const updatedItem = {
                    ...existingCartItem,
                    totalItemAmount: existingCartItem.totalItemAmount - 1
                };
                prevCartItems[existingCartItemIndex] = updatedItem;
                return prevCartItems;
            }
        });
    };

    const clearCartHandler = () => {
        setCartItems([]);
    };

    const getTotalPrice = () => {
        const totalAmount = cartItems.items.reduce((acc, cartItem) => {
            return acc + cartItem.price * cartItem.amount;
        }, 0);
        return totalAmount.toFixed(2);
    };

    const cartContextProviderValues = {
        items: cartItems,
        totalAmount: getTotalPrice(),
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



