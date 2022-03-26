import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import style from "./Store.module.css";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const clickHandler = (product) => {
    const newCartProducts = [...cartProducts, product]
    if (cartProducts.length >= 4) {
      alert('can not add more than 4 product')
      return
    }
    setCartProducts(newCartProducts)
  };

  const resetHandler = () => {
    setCartProducts([])
  }
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
      <Cart products={cartProducts} resetHandler={resetHandler}></Cart>
    </div>
  );
};

export default Store;
