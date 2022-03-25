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
    setCartProducts(newCartProducts)
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
      <Cart products={cartProducts}></Cart>
    </div>
  );
};

export default Store;
