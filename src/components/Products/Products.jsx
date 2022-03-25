import React from 'react';
import style from "./Products.module.css";

const Products = ({product}) => {
  const {name, brand, price, img} = product
  return (
    <div>
      <div className={style.upper}>
        <div className={style.thumbnail}>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Products;