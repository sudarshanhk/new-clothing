import "../cart-icon/cart.style.scss";

import { ReactComponent as ShoppingIcon } from "../../assests/shoppingbag.svg"
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
const CartIcon = () => {

    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const { cartCount } = useContext(CartContext);
    
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <div className=" cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" /> 
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon;