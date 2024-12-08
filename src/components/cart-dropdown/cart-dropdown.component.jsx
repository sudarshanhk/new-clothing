import "../cart-dropdown/cart-dropdown.style.scss"

import Button from "../button/button.component"; 

import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CardDropdown = () => {

    const { cartItem } = useContext(CartContext);
    console.log(cartItem)
    return (
        <div className="cart-dropdown-container" >
            <div className="cart-item ">
                {cartItem.map(item => <CartItem key= {item.id} cartItem={item} />)}
            </div>
                <Button> GO TO CHECKOUT </Button>
          
        </div>
    )
};

export default CardDropdown;