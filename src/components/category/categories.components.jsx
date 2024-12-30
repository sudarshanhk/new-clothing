import { BackgroundImage, CategoryBodyContainer, CategoryItemContainer } from "./categories.style.jsx";
import { useNavigate } from "react-router-dom";

  
const Categories = ({ category }) => {
    const { imageUrl, title, id, route } = category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);
    return (
        
        <CategoryItemContainer key={id}  onClick={onNavigateHandler}>
            <BackgroundImage
                imageUrl={imageUrl} 
             />
            <CategoryBodyContainer >
                <h2>{title}</h2>
                <p> Shop Now</p>
            </CategoryBodyContainer>
        </CategoryItemContainer>
      
   ) 
}

export default Categories;