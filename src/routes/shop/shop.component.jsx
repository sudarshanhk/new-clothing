import { Route, Routes} from "react-router-dom";
import "../shop/shop.style.scss";
import CategoryPreviewTwo from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
const Shop = () => {
   

    return (
        <Routes>
            <Route index element={<CategoryPreviewTwo />} />
            <Route  path=':category' element={<Category />} />

       </Routes>
    );
};

export default Shop;
