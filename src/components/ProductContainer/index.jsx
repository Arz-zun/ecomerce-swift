import { useDispatch } from "react-redux";
import StarRating from "../StartRating";
import "./ProductContainer.css";
import { addToCart } from "../../redux/slice/cartSlice";

const ProductContainer = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (productId, quantity) => {
    dispatch(
      addToCart({
        userId: 5,
        products: [{ id: productId, quantity: quantity }],
      })
    );
  };

  return (
    <div className="product-cart__box">
      <div>
        <div className="img__container">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-img"
          />
        </div>
        <div>
          <h1 className="product__title">{product.title}</h1>
        </div>
        <div>
          <h1 className="product__price">
            <span className="product__currency">Rs. </span>
            {product.price}
            <span className="product__discount">
              /{product.discountPercentage}% Off
            </span>
          </h1>
        </div>
        <div className="product-btn__container">
          <StarRating rating={product.rating} />
          <button
            onClick={() => handleAddToCart(product?.id, 1)}
            className="btn__add-to-cart"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
