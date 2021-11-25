import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollTopArrow";
import AddItem from "./components/AddItem";
import ShopePage from "./pages/shope/Shop";
import DetailPage from "./pages/DetailPage";
import ProductsPage from "./pages/Products";
import CheckoutPage from "./pages/Checkout";
import PaymentSuccessPage from "./pages/PaymentSuccess";

export default function Layout() {
  return (
    <Router>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-item" exact element={<AddItem />} />
        <Route path="/shop" exact element={<ShopePage />} />
        <Route path="/detail-page" exact element={<DetailPage />} />
        <Route path="/products" exact element={<ProductsPage />} />
        <Route path="/checkout" exact element={<CheckoutPage />} />
        <Route path="/payment-success" exact element={<PaymentSuccessPage />} />
      </Routes>
    </Router>
  );
}
