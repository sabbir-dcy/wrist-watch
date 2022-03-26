import React from 'react';
import style from './AddedProduct.module.css'

const AddedProduct = ({name, img}) => {
  return (
    <div className={style.product__list}>
      <img src={img} alt="" />
      <h2 className={style.title}>{name}</h2>
    </div>
  );
};

export default AddedProduct;