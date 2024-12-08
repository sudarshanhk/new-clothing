import "../cart-dropdown/cart-dropdown.style.scss"

import Button from "../button/button.component";

const CardDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-item ">
                <Button> GO TO CHECKOUT </Button>
            </div>
        </div>
    )
};

export default CardDropdown;