import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 bg-white z-50 px-44 shadow-lg">
      <nav className="w-full h-[60px] flex items-center justify-between">
        <Link to="/">
          <h1 className="text-orange-500 text-3xl font-bold transition-transform hover:scale-105">
            Order<span className="text-black">Bro</span>
          </h1>
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <Link to="/search">
              <i className="fa-solid fa-magnifying-glass fa-lg hover:text-orange-500"></i>
            </Link>
          </li>
          <li className="text-lg font-medium hover:text-orange-500">
            <Link to="/singIn">Sign In</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping fa-lg hover:text-orange-500"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
