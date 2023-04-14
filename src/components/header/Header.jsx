import React from "react";
import "./header.scss";
import { RiShoppingCartFill, RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <span>
            <RiShoppingCartFill />
          </span>
          <h1 className="header__logo-title">
            k<span>airo</span>
          </h1>
        </div>

        <nav className="navbar">
          <ul className="navbar__menu">
            {nav__links.map((item, index) => (
              <NavLink to={item.path} key={index}>
                {item.display}
              </NavLink>
            ))}
          </ul>
        </nav>

        <button className="navbar__menu-toggle">
          <RiMenu3Fill />
        </button>
      </div>
    </header>
  );
};

export default Header;
