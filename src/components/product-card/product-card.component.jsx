
import Button from '../button/button.component'
import '../product-card/product-card.style.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';


const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product)
    console.log(product)
    const { name , id , imageUrl , price } = product
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{ price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}> Add to Cart</Button>
        </div>
    )
}

export default ProductCard