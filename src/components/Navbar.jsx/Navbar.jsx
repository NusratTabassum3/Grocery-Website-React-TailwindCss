import React from "react";

function Navbar() {
  return (
    <header>
      <nav className="flex">
        <a href="" className="">
          Gr<span>o</span>cify
        </a>

        {/* Destop Menu */}
        <ul className="flex">
          <li className="">
            <a href="#" className="">
              Home
            </a>
          </li>
          <li className="">
            <a href="#" className="">
              About Us
            </a>
          </li>
          <li className="">
            <a href="#" className="">
              Process
            </a>
          </li>
          <li className="">
            <a href="#" className="">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
