import {CategoryHeaderName , CategoryContainer} from "./category.style.jsx"
import { useParams  } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
const Category = () => {
    const { category } = useParams();
    console.log(category);
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category])
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);
    return (
        <Fragment>
            <CategoryHeaderName>
                <h2>{category}</h2>
           </CategoryHeaderName>
            <CategoryContainer>
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>
        </Fragment>
       
    )
}

export default Category;