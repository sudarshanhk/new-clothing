import Navigation from "./navigation/navigation.component";
import Home from "./routes/home/home.components";

import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication-component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";



function App() {


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index  element={<Home />} />
          <Route path='shop//*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<CheckOut />} />

        </Route> 
          
      </Routes>


    </div>
  );
}

export default App;
