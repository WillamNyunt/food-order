import React, { createContext, useState, useReducer } from 'react';

const CartContextDefaultValues = {
    items: {types: [], amount: 0},
    totalPrice: () => {},
    dispatchCartItems: () => {},
};


export const CartContext = createContext(CartContextDefaultValues);

export const CartProvider = ({children}) => {
    const [cartItems, dispatchCartItems] = useReducer(cartItemsReducer, {
        types: [],
        amount: 0,
    });

    function cartItemsReducer(state, action) {
        const {type, payload} = action;
        if (type === 'ADD_ITEM') {
            const existingCartItemIndex = state.types.findIndex((item) => item.id === payload.id);
            const existingCartItem = state.types[existingCartItemIndex];
            let updatedItems;
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + 1
                };
                updatedItems = [...state.types];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                const updatedItem = { ...payload, amount: 1 }
                updatedItems = state.types.concat(updatedItem);
            }
            console.log(updatedItems)
            return {
                ...state,
                types: updatedItems,
                amount: state.amount + 1
            };  
        } else if (type === 'REMOVE_ITEM') {
            const existingCartItemIndex = state.types.findIndex((item) => item.id === payload);
            const existingItem = state.types[existingCartItemIndex];
            let updatedItems;
            if (existingItem.amount === 1) {
                updatedItems = state.types.filter((item) => item.id !== payload);
            } else {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount - 1
                };
                updatedItems = [...state.types];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            return {
                ...state,
                types: updatedItems,
                amount: state.amount - 1
            };
        } else if (type === 'CLEAR') {
            return CartContextDefaultValues;
        }
        return CartContextDefaultValues;
    }
    
    // const addItemToCartHandler = (item) => {
    //     setCartItems((prevCartItems) => {
    //         const existingCartItem = prevCartItems.types.find((cartItem) => cartItem.id === item.id);
    //         const existingCartItemIndex = prevCartItems.types.findIndex((cartItem) => cartItem.id === item.id);
    //         const updatedCartItems = [...prevCartItems.types];
            
    //         if (existingCartItem) {
    //             const updatedItem = {
    //                 ...existingCartItem,
    //                 amount: existingCartItem.amount + 1
    //             };
    //             updatedCartItems[existingCartItemIndex] = updatedItem;
    //         } else {
    //             const newItem = {...item, amount: 1};
    //             updatedCartItems.push(newItem);
    //         }

    //         console.log(updatedCartItems);
    //         return {
    //             types: updatedCartItems,
    //             amount: prevCartItems.amount + 1
    //         };
    //     });
    // };

    // const removeItemFromCartHandler = (id) => {
    //     setCartItems((prevCartItems) => {
    //         const existingCartItem = prevCartItems.find((cartItem) => cartItem.id === id);
    //         const existingCartItemIndex = prevCartItems.findIndex((cartItem) => cartItem.id === id);
    //         if (existingCartItem.amount === 1) {
    //             return prevCartItems.filter((cartItem) => cartItem.id !== id);
    //         } else {
    //             const updatedItem = {
    //                 ...existingCartItem,
    //                 amount: existingCartItem.amount - 1
    //             };
    //             prevCartItems[existingCartItemIndex] = updatedItem;
    //             return prevCartItems;
    //         }
    //     });
    // };

    // const clearCartHandler = () => {
    //     setCartItems([]);
    // };

    const getTotalPrice = () => {
        const totalPrice = cartItems.types.reduce((acc, type) => {
            return Number(acc) +  Number(type.price) *  Number(type.amount);
        }, 0);
        return totalPrice.toFixed(2);
    };

    const cartContextProviderValues = {
        items: cartItems,
        totalPrice: getTotalPrice(),
        dispatchCartItems,
    };

    return (
        <CartContext.Provider value={cartContextProviderValues}>
            {children}
        </CartContext.Provider>
    );
}



