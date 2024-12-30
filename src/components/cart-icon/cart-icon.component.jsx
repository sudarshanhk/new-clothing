import { ShoppingIcon, CartIconContainer , ItemCount} from  "../cart-icon/cart-icon.style.jsx";

// import { ReactComponent as ShoppingIcon } from "../../assests/shoppingbag.svg"
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
const CartIcon = () => {

    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const { cartCount } = useContext(CartContext);
    
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" /> 
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;