import React, { useState } from "react";
import AddedProduct from "../AddedProduct/AddedProduct";
import style from "./Cart.module.css";

const Cart = ({ products , resetHandler}) => {
  const [randomProduct, setRandomProduct] = useState("");
  const [disable, setDisable] = useState(false);
  const [display, setDisplay] = useState("block");
  const [visibility, setVisibility] = useState("none");

  const randomChoice = () => {
    // random number cant be more than the products have in cart
    if (products.length < 2) {
      alert("choose two products atleast");
      return;
    }
    const random = Math.floor(Math.random() * products.length);
    chooseOne(random);
  };

  const chooseOne = (random) => {
    setRandomProduct(products[random]);
    setVisibility("block");
    setDisable(true);
    setDisplay("none");
  };

  return (
    <div className={style.cart}>
      <div>
        <h2 className={style.cart__title}>watch busket</h2>
        <div style={{ display: `${display}` }}>
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
          style={{ display: `${visibility}` }}
        >
          <img src={randomProduct.img} alt="" />
          <h2>{randomProduct.name}</h2>
          <h2 className={style.price}>{randomProduct.price}</h2>
        </div>
      </div>

      <div>
        <button
          onClick={randomChoice}
          disabled={disable}
          className={style.cart__btn}
        >
          random choice
        </button>
        <button onClick={resetHandler} className={style.cart__btn}>reset</button>
      </div>
    </div>
  );
};

export default Cart;
