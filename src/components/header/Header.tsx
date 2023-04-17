import React, { useRef } from "react";
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
  const menuRef = useRef<HTMLElement>(null);

  const menuToggle = () => {
    menuRef.current?.classList.toggle("active__menu");
  };

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

        <nav className="navbar" ref={menuRef} onClick={menuToggle}>
          <ul className="navbar__menu">
            {nav__links.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={(navClass) =>
                  navClass.isActive ? "navbar__active" : ""
                }
              >
                {item.display}
              </NavLink>
            ))}
          </ul>
        </nav>

        <button className="navbar__menu-toggle" onClick={menuToggle}>
          <RiMenu3Fill />
        </button>
      </div>
    </header>
  );
};

export default Header;
