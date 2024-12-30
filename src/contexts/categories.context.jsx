import SHOP_DATA from "../shop-data.js";
import { createContext, useEffect, useState } from "react";
import {  getCategoriesAndDocuments } from "../utils/firebase/utilities.firebase.jsx";


 export const CategoriesContext = createContext({
     categoriesMap : {}
 });

export const CategoriesProvider = ({ children }) => {
  
    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            console.log(categoriesMap);
            setCategoriesMap(categoriesMap)
        };
        getCategoriesMap()
    },[])
    const value = { categoriesMap } 
    return (
        <CategoriesContext.Provider value={value}> {children}</CategoriesContext.Provider>
            )
}