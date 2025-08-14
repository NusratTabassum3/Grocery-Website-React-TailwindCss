import React from "react";
import Navbar from "../Navbar.jsx/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Values />
    </div>
  );
}

export default Home;
