import React from "react";
import style from "./Cart.module.css";
const Cart = ({ products }) => {
  return (
    <div className={style.cart}>
      <h2 className={style.cart__title}>watch busket</h2>
      {
        products.map((product) => <h2>{product.name}</h2>)
      }
    </div>
  );
};

export default Cart;
