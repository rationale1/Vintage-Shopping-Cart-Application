import React, { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [close, setClose] = useState(true),
    openNav = () => setClose(!close),
    closeNav = () => setClose(true);

  const { cart } = useSelector(state => state.shop);

  return (
    <header>
      <nav className="navbar">
        <div>
          <Link to="/" className="navbar__logo nav-flex ">
            <div className="logo__img">
              <img src={require("../../Images/vintage4.jpg").default} alt="" />
            </div>

            <h5 className="navbar__title">
              <span>V - </span>intages
            </h5>
          </Link>
        </div>

        <div className={close ? "navbar__links" : "navbar__links open"}>
          <FontAwesomeIcon
            icon={faTimes}
            className="navbar__btn fa"
            onClick={closeNav}
          />

          <ul className="navbar__list nav-flex" onClick={closeNav}>
            <li className="navbar__items">
              <Link to="/">Home</Link>
            </li>

            <li className="navbar__items">
              <Link to="/products">Products</Link>
            </li>

            <li className="navbar__items">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        <div>
          <Link to="/cart" className="navbar__cart nav-flex">
            <h3>Cart</h3>

            <div className="cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="fa fa-shopping"
              />
            </div>

            <div className="count">
              <span>{cart.length}</span>
            </div>
          </Link>
        </div>

        <div className="navbar__menu" onClick={openNav}>
          <FontAwesomeIcon icon={faBars} className="fa fa-hamburger" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
