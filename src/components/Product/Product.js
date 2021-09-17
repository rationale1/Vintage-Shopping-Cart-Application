import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart, bannerClose } from "../../Redux/actions/shoppingActions";

const Product = ({ id, title, img, price, inCart }) => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(addToCart(id));

  useEffect(() => {
    setTimeout(() => dispatch(bannerClose()), 2000);
  }, [dispatch, inCart]);

  return (
    <div className="product">
      <div className="box__img">
        <Link to={`/details/${id}`}>
          <img src={img} alt={title} />
        </Link>
      </div>

      <div className="product__details">
        <Link to={`/details/${id}`}>
          <h3>{title}</h3>
        </Link>
        <h4>${price}</h4>
      </div>

      <div className="product__btn">
        <button type="button" onClick={onClick}>
          Add to Cart
        </button>
      </div>

      <div className={!inCart ? `product__inCart` : "product__inCart open"}>
        <span>Already in Cart</span>
      </div>
    </div>
  );
};

export default Product;
