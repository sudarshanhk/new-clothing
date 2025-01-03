import {  CheckoutContainer, CheckoutHeader, HeaderBlock , Total} from "./checkout.style.jsx";


import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckOutItem from "../../components/checkout-item/checkout-item.comopnent";

const CheckOut = () => {

    const { cartItems, cartTotal } = useContext(CartContext)
    return (

        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>

            </CheckoutHeader>
            {
                cartItems.map((item) => {
                   
                    return (

                        <CheckOutItem key={item.id} cartItem={item} />
                           

                        
                    )
                })
            }
            <Total>Total : {cartTotal}</Total>
        </CheckoutContainer>

    )
};
export default CheckOut