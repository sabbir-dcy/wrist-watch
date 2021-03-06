import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import style from "./Products.module.css";

const Products = ({ product, clickHandler }) => {
  const { name, brand, price, img, detail } = product;
  return (
    <div className={style.product}>
      <div className={style.upper}>
        <div className={style.thumbnail}>
          <img src={img} alt="" />
          <div className={style.detail}>
            <p>{detail}</p>
          </div>
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
      <button className={style.add__btn} onClick={() => clickHandler(product)}>
        <p>
          add to cart{" "}
          <span>
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
          </span>
        </p>
      </button>
    </div>
  );
};

export default Products;
