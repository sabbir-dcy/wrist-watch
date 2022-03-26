import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import style from "./Store.module.css";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [randomPd, setRandomPd] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const clickHandler = (product) => {
    const match = cartProducts.find((pd) => pd.id === product.id);
    if (cartProducts.length >= 4) {
      alert("can not add more than 4 product");
      return;
    }
    if (match) {
      alert("cant add same product twice");
      return;
    }
    const newCartProducts = [...cartProducts, product];
    setCartProducts(newCartProducts);
  };

  const randomHandler = () => {
    if (cartProducts.length < 2) {
      alert("choose two products atleast");
      return;
    }
    const num = Math.floor(Math.random() * cartProducts.length);

    const randPd = cartProducts[num]
    setRandomPd(randPd);
    setIsDisabled(true)
    alert(randPd.name)
  };

  const resetHandler = () => {
    setCartProducts([]);
  };
  return (
    <div className={style.store}>
      <div className={style.product__container}>
        {products.map((product) => (
          <Products
            product={product}
            key={product.id}
            clickHandler={clickHandler}
          ></Products>
        ))}
      </div>
      <Cart
        products={cartProducts}
        resetHandler={resetHandler}
        isDisabled={isDisabled}
        randomHandler={randomHandler}
      ></Cart>
    </div>
  );
};

export default Store;
