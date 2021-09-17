import React from "react";
import "./Cart.css";

import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector(state => state.shop);

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="cart">
      <div className="inside__container">
        {cart.length === 0 ? (
          <>
            <h3 className="cart__title">Cart is Currently Empty</h3>
          </>
        ) : (
          <div>
            <h3 className="cart__title">Cart Products</h3>
            <div className="cart__center">
              <div className="cart__item">
                {cart.map(item => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>

              <div className="cart__details">
                <h3 className="cart__title">Product Details</h3>

                <p>
                  Shipping: <span className="free">free</span>
                </p>

                <p>
                  Totals Items: <span> {cart.length} </span>
                </p>

                <p>
                  Total Price: <span>${total}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
