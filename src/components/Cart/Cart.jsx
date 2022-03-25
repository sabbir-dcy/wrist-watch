import React from "react";
import AddedProduct from "../AddedProduct/AddedProduct";
import style from "./Cart.module.css";
const Cart = ({ products }) => {
  return (
    <div className={style.cart}>
      <h2 className={style.cart__title}>watch busket</h2>
      {products.map((product) => (
        <AddedProduct name={product.name} img={product.img} />
      ))}
    </div>
  );
};

export default Cart;
