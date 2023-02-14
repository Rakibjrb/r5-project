import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./ROUTERPAGES/Index";
import "./App.css";

//header and footer compopnents
import Navbar from "./COMPONENTS/Navbar/Navbar";
import Footer from "./COMPONENTS/Footer/Footer";
import Register from "./ROUTERPAGES/Register";
import Login from "./ROUTERPAGES/Login";
import Contact from "./ROUTERPAGES/Contact";
import User from "./ROUTERPAGES/User";
import Cart from "./ROUTERPAGES/Cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/User" element={<User />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
