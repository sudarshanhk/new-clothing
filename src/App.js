import Navigation from "./navigation/navigation.component";
import Home from "./routes/home/home.components";

import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication-component";

const Shop = () => {
  return (
    <div> Hello I am Shop Container </div>
  )
}

function App() {


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index  element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />

        </Route> 
          
      </Routes>


    </div>
  );
}

export default App;
