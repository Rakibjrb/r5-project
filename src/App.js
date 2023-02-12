import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./ROUTERPAGES/Index";

//header and footer compopnents
import Navbar from "./COMPONENTS/Navbar/Navbar";
import Footer from "./COMPONENTS/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
