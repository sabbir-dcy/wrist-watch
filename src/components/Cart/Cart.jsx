
import AddedProduct from "../AddedProduct/AddedProduct";
import style from "./Cart.module.css";

const Cart = ({ products, resetHandler, isDisabled=false, randomHandler }) => {

  return (
    <div className={style.cart}>
      <div>
        <h2 className={style.cart__title}>watch busket</h2>
        <div>
          {products.map((product) => (
            <AddedProduct
              name={product.name}
              img={product.img}
              key={product.id}
            />
          ))}
        </div>
        <div className={style.random__product}></div>
      </div>

      <div>
        <button
          onClick={randomHandler}
          disabled={isDisabled}
          className={`${style.cart__btn} ${style.choose__btn}`}
        >
          random choice
        </button>

        <button onClick={resetHandler} className={style.cart__btn}>
          reset
        </button>

      </div>
    </div>
  );
};

export default Cart;
