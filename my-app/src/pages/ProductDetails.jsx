

import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, removeFromCart } from "../features/cartReducer";

import { addToWishlist, removeFromWishlist } from "../features/wishlistReducer";

export default function ProductDetails() {
  const { id } = useParams();
  const [outfit, setOutfit] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    fetchOutfit();
  }, [id]);

  const fetchOutfit = async () => {
    try {
      const response = await fetch(
        `https://mystylespot-backend.onrender.com/outfit/${id}`
      );
      if (!response.ok) {
        console.error("Failed to fetch product details.");
        return;
      }
      const data = await response.json();
      setOutfit(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const handleAddToWishlist = (outfit) => {
    const isInWishlist = wishlistItems.some((item) => item._id === outfit._id);
    if (isInWishlist) {
      dispatch(removeFromWishlist(outfit._id));
      console.log("Removed from wishlist:", outfit._id);
    } else {
      dispatch(addToWishlist(outfit));
      console.log("Added to wishlist:", outfit._id);
    }
  };

  const handleToggleCart = (outfit) => {
    const isInCart = cartItems.some((item) => item._id === outfit._id);
    if (isInCart) {
      dispatch(removeFromCart(outfit._id)); // fixed here
    } else {
      dispatch(addToCart({ ...outfit, quantity: 1 })); // fixed here
    }
  };

  const renderStars = (rating) => {
    if (!rating) return "No rating";
    return "⭐️".repeat(rating);
  };

  return (
    <>
      <Header />
      {outfit ? (
        <main className="bg-light">
          <div className="container-fluid py-5 px-5">
            {loading && (
              <p className="alert alert-primary" role="alert">
                Loading product Details...
              </p>
            )}
            <div className="card py-5">
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="d-flex justify-content-center align-items-center bg-white rounded border"
                    style={{ height: "300px", overflow: "hidden" }}>
                    <img
                      src={outfit.imgUrl}
                      className="img-fluid"
                      alt={`Image of ${outfit.title}`}
                      style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                    />
                    <button
                      onClick={() => handleAddToWishlist(outfit)}
                      className="position-absolute top-0 end-0 m-1 fs-5"
                      style={{
                        background: "white",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        border: "1px solid lightgray",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 0,
                        cursor: "pointer",
                      }}
                      aria-label="Toggle Wishlist">
                      {wishlistItems.some((item) => item._id === outfit._id)
                        ? "❤️"
                        : "🤍"}
                    </button>
                  </div>

                  <div className="d-grid gap-2 col-8 mx-auto mt-4">
                    <button
                      onClick={() => handleToggleCart(outfit)}
                      className="btn btn-outline-primary">
                      {cartItems.some((item) => item._id === outfit._id)
                        ? "Remove from Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>

                <div className="col-md-7 py-2">
                  <h3>{outfit.title}</h3>
                  <p>Rating: {renderStars(outfit.rating)}</p>
                  <p>Price: ₹{outfit.price}</p>
                  <p>50% off</p>
                  <p>Size: {outfit.size}</p>
                  <p>Quantity: 1</p>

                  <hr />

                  <div className="row mb-4">
                    <div className="col-3 text-center">
                      <img
                        src="https://th.bing.com/th/id/OIP.c7nAP43v6auqEkcrG30IIgHaHa?rs=1&pid=ImgDetMain"
                        alt="Returnable"
                        style={{ height: "50px", width: "50px" }}
                      />
                      <div className="small text-secondary">
                        10 Days Returnable
                      </div>
                    </div>
                    <div className="col-3 text-center">
                      <img
                        src="https://th.bing.com/th/id/R.93f31d069567d92287a217aa607d39a2?rik=F%2ftEE4eBrxOoag&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffree-shipping-png-free-shipping-icon-1600.png&ehk=kPdnOmIwc3o91rZ6p8fnz%2frQGzTAGS7xjUBk0MGZa5M%3d&risl=&pid=ImgRaw&r=0"
                        alt="Free Shipping"
                        style={{ height: "50px", width: "50px" }}
                      />
                      <div className="small text-secondary">Safe Delivery</div>
                    </div>
                    <div className="col-3 text-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/10149/10149282.png"
                        alt="Pay on Delivery"
                        style={{ height: "50px", width: "50px" }}
                      />
                      <div className="small text-secondary">
                        Pay on Delivery
                      </div>
                    </div>
                    <div className="col-3 text-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/8477/8477054.png"
                        alt="Secure Payment"
                        style={{ height: "50px", width: "50px" }}
                      />
                      <div className="small text-secondary">Secure Payment</div>
                    </div>
                  </div>

                  <hr />
                  <strong>Description:</strong>
                  <p>{outfit.description}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <p className="alert alert-primary text-center my-5">
          Loading product details...
        </p>
      )}
      <Footer />
    </>
  );
}
