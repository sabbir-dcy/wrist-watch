import React, { useState } from "react";
import AddedProduct from "../AddedProduct/AddedProduct";
import style from "./Cart.module.css";
const Cart = ({ products }) => {
  const [randomProduct, setRandomProduct] = useState("");
  const randomChoice = () => {
    const random = Math.floor(Math.random() * 4);
  };
  console.log(products);
  return (
    <div className={style.cart}>
      <h2 className={style.cart__title}>watch busket</h2>
      {products.map((product) => (
        <AddedProduct
          name={product.name}
          img={product.img}
          key={Math.random()}
        />
        // used math.random incase multiple product get added to cart. because similar product has same id
      ))}
      <button onClick={randomChoice}>random choice</button>
    </div>
  );
};

export default Cart;
