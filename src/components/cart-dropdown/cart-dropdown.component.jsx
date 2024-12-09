import "../cart-dropdown/cart-dropdown.style.scss"

import Button from "../button/button.component"; 

import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CardDropdown = () => {
    const navigate = useNavigate();
    const goToCheckOut = () => {
        navigate('/checkout');
    }

    const { cartItems } = useContext(CartContext);
   
    return (
        <div className="cart-dropdown-container" >
            <div className="cart-items ">
                {cartItems.map(item => <CartItem key= {item.id} cartItems={item} />)}
            </div>
            <Button onClick={goToCheckOut} > GO TO CHECKOUT </Button>
          
        </div>
    )
};

export default CardDropdown;