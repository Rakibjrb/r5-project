import React from "react";
import { cartdata } from "./cartData";
import "./cartComponent.css";

const CartComponent = () => {
  return (
    <div className="cart">
      <div className="leftDiv">
        <div className="ldiv1">
          <h3>Shopping Cart [ 2 items ]</h3>
          <div>
            <div>
              <input type="checkbox" name="selectAllItems" />
              <label htmlFor="selectAllItems">Select All Items</label>
            </div>
            <button className="delBtn">
              <i className="far fa-trash-alt fa-2x"></i>
            </button>
            <button className="shopMoreBtn">Shop More</button>
          </div>
        </div>
        {cartdata.map((cd) => {
          const { id, cartProductIamge, title, shipping } = cd;
          return (
            <div className="cartProducts" key={id}>
              <input type="checkbox" />

              <img src={cartProductIamge} alt="cartProductpic" />
              <div>
                <h4>{title}</h4>
                <span>{shipping}</span>
              </div>
              <div>
                <button className="delBtn">
                  <i className="far fa-trash-alt fa-2x"></i>
                </button>
                <div className="quantity">
                  <button>
                    <i className="fas fa-add"></i>
                  </button>
                  <h5>3</h5>
                  <button>
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="rightDiv">
        <div className="rightDiv1">
          <h3>Payment Summary</h3>
          <div>
            <p>Subtotal : </p>
            <p>$341.44</p>
          </div>
          <div>
            <p>Shipping Cost : </p>
            <p>$3.50</p>
          </div>
          <div>
            <p>Total Cost : </p>
            <p>$345.38</p>
          </div>
          <button>Pay Now</button>
        </div>
        <div className="rightDiv2">
          <h3>Available Payment Methods</h3>
          <div className="pay_icons">
            <i className="fa-brands fa-cc-visa fa-3x"></i>
            <i className="fa-brands fa-cc-apple-pay fa-3x"></i>
            <i className="fa-brands fa-cc-amex fa-3x"></i>
            <i className="fa-brands fa-cc-amazon-pay fa-3x"></i>
            <i className="fa-brands fa-cc-paypal fa-3x"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
