import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ButtonAppBar from './Components/Navbar'
import Home from "./Components/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Registration from "./Components/Register/Registration";
import Login from "./Components/login/Login";
import Error from "./Components/Error";
import { Switch } from "@mui/material";
import Profile from "./Components/Profile/profile";

function App() {
  const location = useLocation();
  return (
    <>
      <ButtonAppBar />
      {/* {location.pathname === "/" ? <Home /> : null} */}
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
      
          <Route path="*" element={<Error />} />
        </Routes>
     
    </>
  );
}

export default App;
