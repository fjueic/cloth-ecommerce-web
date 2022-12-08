import React from "react";
import { Route, Routes,Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.components";
import "./App.css";
import Header from "./components/header/header.component";
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
    </>
  );
}

export default App;
