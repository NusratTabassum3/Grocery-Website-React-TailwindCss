import React from "react";
import CategoryPage from "../CategoryPage.jsx/CategoryPage";
import BgSeaFood from "../../assets/seafood-banner.jpg";
const SeaFood = () => {
  return (
    <div>
      <CategoryPage title="Meat & SeaFood" bgImage={BgSeaFood} />
    </div>
  );
};

export default SeaFood;
