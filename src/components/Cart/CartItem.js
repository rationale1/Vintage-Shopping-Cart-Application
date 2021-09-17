import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  removeFromCart,
  increaseItem,
  decreaseItem,
} from "../../Redux/actions/shoppingActions";
import { useDispatch } from "react-redux";

const CartItem = ({ img, title, price, id, count }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    count < 1 && dispatch(removeFromCart(id));
  }, [id, count, dispatch]);

  const onDelete = () => dispatch(removeFromCart(id)),
    inCreaseQty = () => dispatch(increaseItem(id)),
    decreaseQty = () => dispatch(decreaseItem(id));

  return (
    <div className="cart__info">
      <div className="cart__img">
        <img src={img} alt={title} />
      </div>

      <h3>{title}</h3>

      <div className="cart__buttons">
        <button type="button" className="cart__btn" onClick={decreaseQty}>
          -
        </button>

        <span>{count}</span>

        <button type="button" className="cart__btn" onClick={inCreaseQty}>
          +
        </button>
      </div>

      <p style={{ color: "teal" }}>${price * count}</p>

      <div>
        <FontAwesomeIcon
          icon={faTrash}
          color="red"
          className="cart__trashcan"
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

export default CartItem;
