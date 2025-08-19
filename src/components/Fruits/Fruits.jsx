import React from "react";
import CategoryPage from "../CategoryPage.jsx/CategoryPage";
import BgFruits from "../../assets/fruits-banner.jpg";
const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Veggies" bgImage={BgFruits} />
    </div>
  );
};

export default Fruits;
