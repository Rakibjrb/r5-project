import React from "react";

const ProductSearch = () => {
  return (
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
  );
};

export default ProductSearch;
