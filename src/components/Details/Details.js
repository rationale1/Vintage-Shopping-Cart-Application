import React from "react";
import "./Details.css";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/actions/shoppingActions";

const Details = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.shop);

  const { id } = useParams();

  const product = products.find(item => item.id === parseInt(id));

  const onClick = () => dispatch(addToCart(product.id));

  return (
    <div className="details">
      <div className="inside__container">
        <h3>Product Details</h3>
        <div className="details__center">
          <div className="details__img">
            <img src={product.img} alt={product.title} />
          </div>

          <div className="details__info">
            <h4 className="details__title">{product.title}</h4>

            <p className="details__text">{product.details}</p>

            <p className="details__price">
              Price: <span>${product.price}</span>
            </p>

            <div className="details__btn">
              <Link to="/products">
                <button type="button" className="detail-btn">
                  {" "}
                  Back to products
                </button>
              </Link>

              <button
                type="button"
                className="detail-btn"
                onClick={onClick}
                disabled={product.inCart}>
                {product.inCart ? "InCart" : "Add To Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
