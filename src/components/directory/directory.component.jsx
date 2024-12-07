import Categories from "../category/categories.components";
import "../directory/directory.style.scss"
const Directory = ( {cateGoriesList} ) => {
    return (
        <div className='directory-container'>
            {
                cateGoriesList.map((category) => {
                    return (
                        <Categories category={category} />
                    );

                })
            }
            </div>
       
   )
    
    
}

export default Directory;