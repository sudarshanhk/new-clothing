import "./category-preview.style.scss";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
const CategoryPreview = ({ title, products }) => {
    console.log(products)
    return (
        <div className="category-preview-container">
            <h2>
                <Link to={title} className="title">{title.toUpperCase()} </Link>
            </h2>
            <div className="preview">

                {
                    products.filter((_, idx) => idx < 4).map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
                }

            </div>

        </div>
    )

 }
    

 export default CategoryPreview