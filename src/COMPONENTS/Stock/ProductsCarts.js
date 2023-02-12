import React from "react";
import { products } from "./products";

const ProductsCarts = () => {
  return (
    <div>
      {products.map((p) => {
        const {
          id,
          inStock,
          sold,
          price,
          rating,
          image,
          productName,
          productDescription,
        } = p;
        return (
          <article key={id}>
            <div className="childdiv">
              <h5>{inStock} in stock</h5>
              <h5>{sold} sold</h5>
            </div>
            <div className="parentdiv">
              <img src={image} alt="ProductPicture" />
              <h3>{productName}</h3>
              <p>{productDescription}</p>
              <p>Price : {price}</p>
              <p>Rating : {rating}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsCarts;
