import React from "react";

import Navbar from "./header/Navbar";
import {  Route, Routes } from "react-router-dom";
import Signup from './component/Signup'
import Login from "./component/Login";
import Private from "./component/Private";
import Home from "./pages/Home";
import CartDetails from "./cartss/CartDetails";
import Success from "./component/Success";
import Cancel from "./component/Cancel";






function App() {
  return (<>
 
 
 <Navbar /> <br></br>
 <Routes>
  <Route element={<Private />}>
  <Route path="/" element={<Home />} />
  <Route path="/cart" element={<CartDetails />}/>
  <Route path="/logout" element={<h1>Logout</h1>}/>
  <Route path="/success" element={<Success />}/>
  <Route path="/cancel" element={<Cancel />}/>
  </Route>
  
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />}/>
 </Routes>
 
  
  </>
   
  );
}

export default App;
