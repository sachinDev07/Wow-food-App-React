import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((store) => store.cart.items);
  const login = useSelector((store) => store.login.logged);

  const handleNavigation = () => {
    if (login) {
      navigate("/cart");
    } else {
      navigate("/signIn");
    }
  };

  return (
    <header className="fixed left-0 right-0 bg-white z-50 px-2 md:px-32 lg:px-44 shadow-lg">
      <nav className="w-full h-[60px] flex items-center justify-between">
        <Link to="/">
          <h1 className="text-orange-500 text-2xl md:text-3xl font-bold transition-transform hover:scale-105">
            Order<span className="text-black">Bro</span>
          </h1>
        </Link>
        <ul className="flex items-center gap-3 md:gap-8">
          <li>
            <Link to="/search">
              <i className="fa-solid fa-magnifying-glass fa-sm md:fa-lg hover:text-orange-500 lg:text-xl"></i>
            </Link>
          </li>
          {!login && (
            <li className=" text-sm md:text-lg font-medium hover:text-orange-500 lg:text-xl">
              <Link to="/signIn">Sign In</Link>
            </li>
          )}
          <li className="relative" onClick={handleNavigation}>
            <Link>
              <i className="fa-solid fa-cart-shopping fa-sm md:fa-lg hover:text-orange-500 lg:text-xl"></i>
              <span className="absolute -top-1 md:-top-2 right-0 left-2 md:left-3 lg:left-4 lg:-top-1 text-white text-[9px] md:text-[11px] w-3 h-3 md:w-4 md:h-4 flex items-center justify-center rounded-full bg-blue-500">
                {cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
