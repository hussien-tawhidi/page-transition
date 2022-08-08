import React from "react";
import { Route, Routes, useLocation } from "react-router";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Menu/Products";
// import { AnimatePresence } from "framer-motion/dist/framer-motion";
import { AnimatePresence } from "framer-motion";
const ComRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/contacts"} element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default ComRouter;
