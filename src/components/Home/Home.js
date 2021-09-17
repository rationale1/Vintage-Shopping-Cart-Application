import React from "react";
import "./Home.css";
import Products from "../Product/Products";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="banner">
          <h1>Welcome to Classic Cars</h1>
        </div>
      </div>

      <Products />
    </>
  );
};

// 2:52:06
export default Home;
