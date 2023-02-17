import React, { useState } from "react";
import ShortCurt from "../ShortCurt/ShortCurt";
import ProductSearch from "../ProductSearch/ProductSearch";
import ProductsCarts from "../ProductCarts/ProductsCarts";
import { products } from "./products";
import "./stock.css";

const Stock = () => {
  const [filterCartsD] = useState(products);
  const [filterCarts, setFilterCarts] = useState(filterCartsD);

  const forshippingValue = (value) => {
    const allfilterCarts = filterCartsD.filter(
      (filtered) => filtered.shipping === value.toLowerCase()
    );
    setFilterCarts(allfilterCarts);
  };

  return (
    <>
      <section id="stock">
        <ShortCurt forshippingValue={forshippingValue} />
        <div className="rightDivMain">
          <ProductSearch />
          <div className="cartGrid">
            {filterCarts.map((p) => {
              const {
                id,
                image,
                inStock,
                sold,
                price,
                rating,
                shipping,
                productName,
                productDescription,
              } = p;
              return (
                <ProductsCarts
                  key={id}
                  data={{
                    id,
                    image,
                    inStock,
                    sold,
                    price,
                    rating,
                    shipping,
                    productName,
                    productDescription,
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stock;
