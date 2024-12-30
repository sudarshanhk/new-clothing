 import {BackgroundImage ,CategoryBodyContainer , CategoryItemContainer} from "./categories.style.jsx"

  
const  Categories = ( {category} ) => {
    const { imageUrl, title, id } = category;
    console.log (category)
 
    return (
        
        <CategoryItemContainer key={id} >
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