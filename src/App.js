import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "./redux/slice/productSlice";

import "./App.css";
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";
import CartContainer from "./components/CartContainer";
import { getCartDetails } from "./redux/slice/cartSlice";

function App() {
  //hooks and store state
  const dispatch = useDispatch();

  //product data
  const productList = useSelector(
    (prevState) => prevState.productReducer.productList
  );
  const loading = useSelector((prevState) => prevState.productReducer.loading);

  //cart data
  const cartDetails = useSelector(
    (prevState) => prevState.cartReducer.cartDetails
  );

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getCartDetails(5));
  }, [dispatch]);

  return (
    <main>
      <Header />
      <div className="container">
        {loading ? (
          <div className="loading__box">
            <p>Loading... </p>
          </div>
        ) : (
          <div className="product-cart__container">
            <div className="products__container">
              {productList?.length <= 0 ? (
                <div className="loading__box">
                  <p>No products are found</p>
                </div>
              ) : (
                productList?.map((product) => (
                  <ProductContainer product={product} key={product.id} />
                ))
              )}
            </div>
            <div className="cart__container">
              <CartContainer cartDetails={cartDetails} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
