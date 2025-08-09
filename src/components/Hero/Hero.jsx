import React from "react";
import Grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

function Hero() {
  return (
    <section className="">
      <div className="max-w-[1400px] mx-auto px-10">
        {/* Hero Content  */}

        <div className="">
          <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
            Export Best Quality...
          </span>

          <h1 className="text-7xl font-bold">
            Tasty Organic <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span> In Your City
          </h1>

          <p className="text-zinc-600 text-lg">
            Bred for a high content of beneficial substance, Our Product are all
            fresh and healthy.
          </p>
          <Button content="Shop Now" />
        </div>

        {/* Hero Image  */}

        <div className="">
          <img src={Grocery} alt="" className="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
