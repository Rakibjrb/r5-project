import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./ROUTERPAGES/Index";
import "./App.css";
import "./App.responsive.css";

//header and footer compopnents
import Navbar from "./COMPONENTS/Navbar/Navbar";
import Footer from "./COMPONENTS/Footer/Footer";
import Register from "./ROUTERPAGES/Register";
import Login from "./ROUTERPAGES/Login";
import Contact from "./ROUTERPAGES/Contact";
import User from "./ROUTERPAGES/User";
import Cart from "./ROUTERPAGES/Cart";
import ProtectedRouter from "./ROUTERPAGES/ProtectedRouter";

const App = () => {
  const [success, setSuccess] = useState("");

  const loginSuccess = (message) => {
    setSuccess(message);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/Login"
            element={<Login loginSuccess={loginSuccess} />}
          />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/User"
            element={
              <ProtectedRouter login={success}>
                <User />
              </ProtectedRouter>
            }
          />
          <Route
            path="/Cart"
            element={
              <ProtectedRouter login={success}>
                <Cart />
              </ProtectedRouter>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
