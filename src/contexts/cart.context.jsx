import { createContext, useEffect, useState } from "react"



const addCartItem = (cartItems, productToAdd) => {

     const existingCartItem =  cartItems.find( (item ) => item.id == productToAdd.id)

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id == productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : '') 
             
         }

    return  [ ...cartItems, {...productToAdd , quantity :1, }]
    
}
 export const CartContext = createContext({
    isCartOpen: false,
     setIsCartOpen: () => { },
     cartItem: [] ,
     addItemToCart: () => { },
     cartCount: 0

});


export const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItem  , setCartItems] = useState([])
    // const value = { isCartOpen, setIsCartOpen };
    const [ cartCount , setCardCount ] = useState(0)
    const addItemToCart = ( productToAdd) => {
        setCartItems(addCartItem(cartItem , productToAdd))
    }
    useEffect(() => {
        const newCartCount = cartItem.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCardCount(newCartCount);
    }, [cartItem])
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItem, cartCount }
    return (
        <CartContext.Provider value={value}>{ children}</CartContext.Provider>
    )
}

