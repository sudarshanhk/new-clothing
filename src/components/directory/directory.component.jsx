import Categories from "../category/categories.components";
import { DirectoryContainer } from "../directory/directory.style.jsx"
const Directory = ( {cateGoriesList} ) => {
    return (
        <DirectoryContainer>
            {
                cateGoriesList.map((category) => {
                    return (
                        <Categories category={category} key={category.id} />
                    );

                })
            }
            </DirectoryContainer>
       
   )
    
    
}

export default Directory;