import "../cart-item/cart-item.style.scss";

const CartItem = ({ cartItems }) => {
    
    const { name, quantity, imageUrl , price} = cartItems
    return (
        <div className="cart-item-container">
            <img src={imageUrl} />
            <div className="item-details">
                <span className="name">{name}</span>
          
                <span className="price">{quantity} x { price}</span>
            </div>
        </div>
    )
};

export default CartItem;