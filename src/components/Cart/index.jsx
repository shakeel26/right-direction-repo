import React from "react";
import "./cart.css";
import { MdDelete } from "react-icons/md";

export default function Cart(props) {
  const { isCartOpen, setIsCartOpen } = props;
  return (
    <div className={isCartOpen ? "cart-container active-cart" : "cart-container"}>
      <div className="cart-close-btn-container">
        <button className="flex-center" onClick={() => setIsCartOpen(!isCartOpen)}>
          X
        </button>
      </div>
      <div className="cart-items-scoller">
        {/* cart items are mapped with line below */}
        <div className="cart-item-container">
          <div className="cart-item-img" style={{ backgroundImage: `url(/images/outfit-image/0M6A6784.jpg)` }} />
          <div className="cart-info-container">
            <p className="cart-brand-name">brand Name</p>
            <p className="cart-item-name">item name here</p>
            <p className="cart-item-quantity">
              Quantity : <strong>1</strong>
            </p>
            <p className="cart-item-price">$ 14</p>
          </div>
          <div>
            <MdDelete size={25} />
          </div>
        </div>
      </div>
      <p className="cart-ship-msg">
        <span className="cart-msg-bold">SHIPPING!</span> Continue shopping to add more products and receive free shipping
      </p>
      <div className="flex-space-between">
        <h3 className="cart-total-price-lable">Zwischensumme:</h3>
        <h3 className="cart-total-price-lable">€12.90</h3>
      </div>
      <div>
        <button className="cart-checkout-btn">Checkout</button>
      </div>
    </div>
  );
}
