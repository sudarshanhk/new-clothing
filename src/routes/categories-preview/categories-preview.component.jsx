import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
// import ProductCard from "../../components/product-card/product-card.component";
import "./categories-preview.style.scss";
import CategoryPreview from "../../components/category-preview/category-preview.component";  // This import is already correct

const CategoryPreviewTwo = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    console.log(categoriesMap);

    return (
        <div className="category-preview-container">
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    if (Array.isArray(products) && products.length > 0) {
                        return (
                            <CategoryPreview key={title} title={title} products={products} />
                        );
                    } else {
                        // Fallback for empty or non-array categories
                        return null;
                    }
                })
            }
        </div>
    );
};

export default CategoryPreviewTwo;
