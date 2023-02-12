import React from "react";
import { categories } from "./extraData";
import { prices } from "./extraData";
import ProductsCarts from "./ProductsCarts";

const Stock = () => {
  return (
    <>
      <section id="stock">
        <div className="leftDiv">
          <div className="categoriesDiv">
            <h2>Select Categories</h2>
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
            <h2>Select Price Range</h2>
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
            <h2>Select Shipping Method</h2>
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
        <div className="rightDiv">
          <ProductsCarts />
        </div>
      </section>
    </>
  );
};

export default Stock;
