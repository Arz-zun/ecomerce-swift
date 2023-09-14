import CartProduct from "../CartProduct";
import "./CartContainer.css";

const CartContainer = ({ cartDetails }) => {
  console.log("cartDetails", cartDetails);
  return (
    <div className="cart__cover">
      <h2 className="cart__title">My shopping cart</h2>
      {cartDetails?.products?.length <= 0 ? (
        <div>
          <p>No item is added yet.</p>
        </div>
      ) : (
        <>
          {cartDetails?.products?.map((product) => (
            <CartProduct product={product} key={product.id} />
          ))}
          <div className="cart-text__container">
            <p>Total Product</p>
            <p className="cart-data">{cartDetails.totalProducts}</p>
          </div>
          <div className="cart-text__container">
            <p>Total Quantity</p>
            <p className="cart-data">{cartDetails.totalQuantity}</p>
          </div>
          {cartDetails?.discountedTotal ? (
            <div className="cart-text__container">
              <p>Total Price</p>
              <p className="cart-data">
                Rs.<strike>{cartDetails?.total}</strike>/
                {cartDetails?.discountedTotal}
              </p>
            </div>
          ) : (
            <div className="cart-text__container">
              <p>Total Price</p>
              <p className="cart-data">Rs.{cartDetails.total}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CartContainer;
