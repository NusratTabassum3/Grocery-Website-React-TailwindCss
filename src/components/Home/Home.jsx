import React from "react";
import Navbar from "../Navbar.jsx/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
    </div>
  );
}

export default Home;
