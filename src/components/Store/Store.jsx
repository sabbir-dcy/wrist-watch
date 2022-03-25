import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import style from "./Store.module.css";

const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className={style.store}>
      <div className={style.product__container}>
        {products.map((product) => (
          <Products product={product} key={product.id}></Products>
        ))}
      </div>
    </div>
  );
};

export default Store;
