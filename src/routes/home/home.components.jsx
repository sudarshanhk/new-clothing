 
import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component.jsx";

import Navigation  from "../../navigation/navigation.component.jsx";


const Home = () => {
  
    return (
        <div>

            {/* <Outlet/> */}
            {/* <Navigation /> */}
            <Directory />
           
           </div>
    )
};
 export default Home;