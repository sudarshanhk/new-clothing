import { createContext, useEffect, useState , useReducer} from "react"

import { CreateAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((item) => item.id == productToAdd.id)

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id == productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
             
    }

    return [...cartItems, { ...productToAdd, quantity: 1, }]
    
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((item) => item.id == cartItemToRemove.id)

    if (existingCartItem.quantity == 1) {
        return cartItems.filter(cartItem => cartItem.id != cartItemToRemove.id)
    }

    return cartItems.map((cartItem) => cartItem.id == cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}

const clearCartItem = (cartItems, cartItemToClear) =>{
    return cartItems.filter(cartItem => cartItem.id != cartItemToClear.id)
}
 export const CartContext = createContext({
     isCartOpen: false,
     setIsCartOpen: () => { },
     cartItems: [] ,
     addItemToCart: () => { },
     removeItemFromCart: () => { },
     clearItemFromCart: () => { },
     cartCount: 0,
     cartTotal: 0

});


const CART_ACTION_TYPE = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_IS_CART_OPEN : "SET_IS_CART_OPEN",
}
const INITIAL_STATES = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,

}


const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPE.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPE.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
      
        default:
            throw new Error(`encountered unknown type ${type} in cartReducer`);
    };
   
}



export const CartProvider = ({ children }) => {

   
    const [{ cartItems, isCartOpen, cartTotal, cartCount }, dispatch] = useReducer(cartReducer, INITIAL_STATES )

    const updateCartTotal = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const Total = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        dispatch(
            CreateAction(CART_ACTION_TYPE.SET_CART_ITEMS, {
                cartItems: newCartItems,
                cartTotal: Total,
                cartCount: newCartCount
            })
            )
        
    }
    const addItemToCart = (productToAdd) => {
        const newCartItem = addCartItem(cartItems, productToAdd)
        updateCartTotal(newCartItem);
    }
    const removeItemToCart = (cartItemToRemove) => {
        const newCartItem = removeCartItem(cartItems, cartItemToRemove);
        updateCartTotal(newCartItem);
    }
    const clearItemFromCart = (cartItemToClear) => {
        const newCartItem = clearCartItem(cartItems, cartItemToClear);
        updateCartTotal(newCartItem);
    }

    const setIsCartOpen = (bool) => {
        dispatch(
            CreateAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool))
           
        }
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart, clearItemFromCart, cartTotal }
    return (
        <CartContext.Provider value={value}>{ children}</CartContext.Provider>
    )
}

