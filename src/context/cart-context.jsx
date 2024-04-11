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
        types: [],
        amount: 0
    });

    const addItemToCartHandler = (item) => {
        setCartItems((prevCartItems) => {
            const existingCartItem = prevCartItems.types.find((cartItem) => cartItem.id === item.id);
            const existingCartItemIndex = prevCartItems.types.findIndex((cartItem) => cartItem.id === item.id);
            const updatedCartItems = [...prevCartItems.types];
            
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + 1
                };
                updatedCartItems[existingCartItemIndex] = updatedItem;
            } else {
                const newItem = {...item, amount: 1};
                updatedCartItems.push(newItem);
            }

            console.log(updatedCartItems);
            return {
                types: updatedCartItems,
                amount: prevCartItems.amount + 1
            };
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

    const getTotalPrice = () => {
        const totalPrice = cartItems.types.reduce((acc, type) => {
            console.log(acc, type.price, type.amount)
            return Number(acc) +  Number(type.price) *  Number(type.amount);
        }, 0);
        return totalPrice.toFixed(2);
    };

    const cartContextProviderValues = {
        items: cartItems,
        totalPrice: getTotalPrice(),
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



