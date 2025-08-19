import React from "react";
import CategoryPage from "../CategoryPage.jsx/CategoryPage";
import BgAll from "../../assets/all-banner.jpg";
const AllProducts = () => {
  return (
    <CategoryPage title="All Product" bgImage={BgAll} categories={["All"]} />
  );
};

export default AllProducts;
