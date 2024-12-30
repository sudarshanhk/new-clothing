import {CartDropdownContainer , EmptyMessage , CartItems } from "./cart-dropdown.style.jsx"

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
        <CartDropdownContainer >
            <CartItems>
                {cartItems.length < 0 ? <EmptyMessage> Your cart don't have an items</EmptyMessage> : cartItems.map(item => <CartItem key={item.id} cartItems={item} />)}
            </CartItems>
            <Button onClick={goToCheckOut} > GO TO CHECKOUT </Button>
          
        </CartDropdownContainer>
    )
};

export default CardDropdown;