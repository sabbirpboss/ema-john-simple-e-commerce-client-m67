import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({ cart }) => {
  // console.log(cart);

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>
        Total price: <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
        {total}
      </p>
      <p>
        Total Shipping: <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
        {shipping}
      </p>
      <p>
        Tax: <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
        {tax}
      </p>
      <h5>
        Grand Total: <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
        {grandTotal.toFixed(2)}
      </h5>
    </div>
  );
};

export default Cart;
