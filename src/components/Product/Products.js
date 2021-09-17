import React from "react";
import "./Products.css";
import { useSelector } from "react-redux";

import Product from "./Product";

const Products = () => {
  const { products } = useSelector(state => state.shop);

  return (
    <div className="products">
      <div className="inside__container">
        <h3 className="products__title">Products</h3>

        <div className="products__center">
          {products.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

// 6:18:38
