import React from "react";
import ProductCart from "./ProductsCarts";
import { categories } from "./extraData";
import { prices } from "./extraData";
import "./stock.css";

const Stock = () => {
  return (
    <>
      <section id="stock">
        <div className="leftDiv">
          <div className="categoriesDiv">
            <h2>Categories</h2>
            {categories.map((categorie) => {
              const { id, name, checkbox } = categorie;
              return (
                <div key={id}>
                  {checkbox}
                  <label>{name}</label>
                </div>
              );
            })}
          </div>
          <div className="pricesDiv">
            <h2>Price Range</h2>
            {prices.map((p) => {
              const { id, price, radio } = p;
              return (
                <div key={id}>
                  {radio}
                  <label>{price}</label>
                </div>
              );
            })}
          </div>
          <div className="shippingOptionDiv">
            <h2>Shipping Method</h2>
            <div>
              <input type="radio" value="Free" />
              <label>Free</label>
            </div>
            <div>
              <input type="radio" value="Paid" />
              <label>Paid</label>
            </div>
          </div>
        </div>
        <div className="rightDivMain">
          <div className="productSearch">
            <div className="shortBy">
              <label htmlFor="shortBy">Short By : </label>
              <select name="shortBy">
                <option value="mostsold">Most Sold</option>
                <option value="topratings">Top Rated</option>
                <option value="bigdiscounts">Big Discounts</option>
                <option value="newproducts">New Products</option>
                <option value="highquality">High Quality</option>
              </select>
            </div>
            <div className="searchForm">
              <form>
                <input type="text" placeholder="Search Product Here" required />
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
        <ProductCart />
      </section>
    </>
  );
};

export default Stock;
