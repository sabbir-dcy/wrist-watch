import React, { useState } from "react";
import AddedProduct from "../AddedProduct/AddedProduct";
import style from "./Cart.module.css";

const Cart = ({ products }) => {
  const [randomProduct, setRandomProduct] = useState("");
  const [disable, setDisable] = useState(false);
  const [display, setDisplay] = useState("1");
  const [visibility, setVisibility] = useState("hidden");

  const randomChoice = () => {
    // random number cant be more than the products have in cart
    if (products.length < 2) {
      alert("choose two products atleast");
      return;
    }
    const random = Math.floor(Math.random() * products.length);
    chooseOne(random)
  };

  const chooseOne = (random) => {
    setRandomProduct(products[random]);
    setVisibility('visible')
    setDisable(true);
    setDisplay(".2");
  }

  return (
    <div className={style.cart}>
      <h2 className={style.cart__title}>watch busket</h2>
      <div style={{ opacity: `${display}` }}>
        {products.map((product) => (
          <AddedProduct
            name={product.name}
            img={product.img}
            key={Math.random()}
          />
          // used math.random incase multiple product get added to cart. because similar product has same id
        ))}
      </div>

      <div
        className={style.random__product}
        style={{ visibility: `${visibility}` }}
      >
        <img src={randomProduct.img} alt="" />
        <h2>{randomProduct.name}</h2>
      </div>

      <button
        onClick={randomChoice}
        disabled={disable}
        className={style.random__btn}
      >
        random choice
      </button>
    </div>
  );
};

export default Cart;
