import React from "react";
import { products } from "./products";
import "./productsCart.css";

const ProductsCarts = () => {
  const addItemToLs = (id) => {
    console.log(id);
  };

  return (
    <div className="cartGrid">
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
          shipping,
        } = p;
        return (
          <article key={id}>
            <div className="childdiv">
              <h4>{inStock} in stock</h4>
              <hr />
              <h5>{sold} sold</h5>
            </div>
            <div className="maindiv">
              <img src={image} alt="ProductPicture" />
              <h3>{productName}</h3>
              <p>{productDescription}...</p>
              <h5>Price : {price}</h5>
              <h5>Rating : {rating}</h5>
              <h5>Shipping : {shipping}</h5>
            </div>
            <button
              onClick={() => {
                addItemToLs(id, image, productName, shipping);
              }}
            >
              Add To Cart
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsCarts;
