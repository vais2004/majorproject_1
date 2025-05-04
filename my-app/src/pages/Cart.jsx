import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  fetchCartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const { items } = cart;
  const dispatch = useDispatch();
  console.log("cart", cart);
  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const getTotal = () => {
    return cart.items.reduce((acc, curr) => {
      const itemTotal = cart.items.price * cart.items.quantity;
      // return total+itemTotal
    }, 0);
  };
  return (
    <>
      <Header />
      <main>
        <h2>My Cart</h2>
        {cart.items.length === 0 ? (
          <p className="alert alert-primary">Your cart is empty.</p>
        ) : (
          <div className="col-md-6">
            {cart.items.map((item) => (
              <div className="card">
                <img
                  src={item.product.imgUrl}
                  className=" py-4 card-img-top d-grid gap-2 col-6 mx-auto "
                  style={{ height: "275px", width: "250px" }}
                  alt={item.product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    <strong>{item.price}</strong>
                  </p>
                  <p>{item.product.discount}</p>
                  <p>
                    Quantity:
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>
                      +
                    </button>
                    0
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>
                      -
                    </button>
                  </p>
                  <a
                    onClick={() => dispatch(removeItem(item.id))}
                    className="btn btn-secondary">
                    Remove From Cart
                  </a>
                  <a href="" className="btn btn-light">
                    Add to Wishlist
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}