import React from "react";
import style from "./Products.module.css";

const Products = ({ product, clickHandler }) => {
  const { name, brand, price, img } = product;
  return (
    <div className={style.product}>
      <div className={style.upper}>
        <div className={style.thumbnail}>
          <img src={img} alt="" />
        </div>
        <div className={style.upper__info}>
          <h2 className={style.name}>{name}</h2>
          <h2 className={style.price}>{price}</h2>
        </div>
      </div>
      <div className={style.lower}>
        <div className={style.lower__info}>
          <h3>brand : {brand}</h3>
        </div>
      </div>
        <button
          className={style.add__btn}
          onClick={() => clickHandler(product)}
        >
          add to cart
        </button>
    </div>
  );
};

export default Products;
