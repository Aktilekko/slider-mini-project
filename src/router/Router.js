import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Shop from "../components/pages/shop/Shop";
import Cart from "../components/pages/cart/Cart";

const Router = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
