import Navigation from "./navigation/navigation.component";
import Home from "./routes/home/home.components";

import { Route, Routes } from "react-router-dom";
import SignIn from "./routes/signin/signin-component";

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
          <Route path='signin' element={<SignIn />} />

        </Route> 
          
      </Routes>


    </div>
  );
}

export default App;
