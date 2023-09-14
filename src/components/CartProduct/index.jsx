import React from "react";
import "./CartProduct.css";

const CartProduct = ({ product }) => {
  return (
    <div className="cart-product__container">
      <h2 className="cart-product__title">{product.title}</h2>
      <div>
        {product?.discountPercentage ? (
          <p>
            Price: Rs.
            <span className="cart-product__highlight">
              {product?.total}/{product?.discountPercentage}% Off
            </span>
          </p>
        ) : (
          <p>Total Price: Rs.{product?.price}</p>
        )}
      </div>
      <div>
        {product?.discountPercentage ? (
          <p>
            Total Price: Rs.
            <span className="cart-product__highlight">
              <strike>{product?.total}</strike>/{product?.discountedPrice}
            </span>
          </p>
        ) : (
          <p>Total Price: Rs.{product?.total}</p>
        )}
        <div className="cart-product__btn-box">
          <button>+</button>
          <p>{product.quantity}</p>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
