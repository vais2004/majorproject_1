import useFetch from "../useFetch";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../features/cartReducer";
import { addToWishlist, removeFromWishlist } from "../features/wishlistReducer";
//import { handleAddToWishlist,handleToggleCart } from "./ButtonAction";

export default function ProductListingPage() {
  const navigate = useNavigate();

  //const [outfits, setOutfits] = useState([]);
  const { outfitId } = useParams();

  const {
    data: outfits,
    loading,
    error,
  } = useFetch("https://mystylespot-backend.onrender.com/outfit", []);

  const [filters, setFilters] = useState({
    priceRange: 550,
    categories: [],
    rating: null,
    sortBy: "",
  });

  //for search
  const searchText = useSelector((state) => state.search.text.toLowerCase());

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectRating, setSelectedRating] = useState(null);
  const [priceRange, setPriceRange] = useState(550);
  const [sortBy, setSortBy] = useState("");

  let filteredOutfits = outfits.filter((outfit) => {
    const matchesCategory =
      selectedCategory.length === 0 ||
      selectedCategory.includes(outfit.category);
    const matchesRating =
      selectRating === null || outfit.rating >= selectRating;
    const matchesPrice = outfit.price <= priceRange;
    const matchesSearch =
      searchText === "" ||
      outfit.title.toLowerCase().includes(searchText) ||
      outfit.category.toLowerCase().includes(searchText);

    return matchesCategory && matchesRating && matchesPrice && matchesSearch;
  });

  if (sortBy === "Price-Low To High") {
    filteredOutfits = filteredOutfits.sort((a, b) => a.price - b.price);
  } else if (sortBy === "Price-High To Low") {
    filteredOutfits = filteredOutfits.sort((a, b) => b.price - a.price);
  }

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategory((prev) =>
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );
  };

  const handleRatingChange = (e) => {
    setSelectedRating(parseFloat(e.target.value));
  };

  const handlePriceChange = (e) => {
    setPriceRange(parseInt(e.target.value, 10));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const dispatch = useDispatch();
  //for wishlist
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const handleAddToWishlist = (outfit) => {
    const isPresentInWishlist = wishlistItems.some(
      (item) => item._id === outfit._id
    );
    if (isPresentInWishlist) {
      dispatch(removeFromWishlist(outfit._id));
    } else {
      dispatch(addToWishlist(outfit));
    }
  };

  //cart

  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleToggleCart = (outfit) => {
    const isPresentInCart = cartItems.some((item) => item._id === outfit._id);
    if (isPresentInCart) {
      dispatch(removeFromCart(outfit._id));
    } else {
      dispatch(addToCart({ ...outfit, quantity: 1 }));
    }
  };

  return (
    <>
      <Header />
      <main className="container-fluid py-3">
        {outfits ? (
          <div className="row">
            <div className="col-md-3">
              <div className="d-flex justify-content-between">
                <h5>Filters</h5>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => {
                    setSelectedCategory([]);
                    setSelectedRating(null);
                    setPriceRange(550);
                    setSortBy("");
                  }}>
                  Clear Filters
                </button>
              </div>
              <br />
              <br />
              <h5>Price</h5>

              <div className="d-flex justify-content-between">
                <span>350</span>
                <span>450</span>
                <span>550</span>
              </div>
              <input
                type="range"
                className="form-range"
                id="priceSlider"
                min="350"
                max="550"
                step="100"
                value={priceRange}
                onChange={handlePriceChange}
              />
              <br />
              <br />

              <h5>Category</h5>
              <label for="men">
                <input
                  type="checkbox"
                  name="category"
                  value="Men"
                  id="men"
                  onChange={handleCategoryChange}
                  checked={selectedCategory.includes("Men")}
                />{" "}
                Men Clothing
              </label>
              <br />
              <label for="women">
                <input
                  type="checkbox"
                  name="category"
                  value="Women"
                  id="women"
                  onChange={handleCategoryChange}
                  checked={selectedCategory.includes("Women")}
                />{" "}
                Women Clothing
              </label>
              <br />
              <label for="kids">
                <input
                  type="checkbox"
                  name="category"
                  value="Kids"
                  id="kids"
                  onChange={handleCategoryChange}
                  checked={selectedCategory.includes("Kids")}
                />{" "}
                Kids Clothing
              </label>
              <br />
              <br />
              <h5>Rating</h5>
              <label for="4Stars">
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  id="4Stars"
                  onChange={handleRatingChange}
                  checked={selectRating === 4}
                />{" "}
                4 Star & above
              </label>
              <br />
              <label for="3Stars">
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  id="3Stars"
                  onChange={handleRatingChange}
                  checked={selectRating === 3}
                />{" "}
                3 Star & above
              </label>
              <br />
              <label for="2Stars">
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  id="2Stars"
                  onChange={handleRatingChange}
                  checked={selectRating === 2}
                />{" "}
                2 Star & above
              </label>
              <br />
              <label for="1Stars">
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  id="1Stars"
                  onChange={handleRatingChange}
                  checked={selectRating === 1}
                />{" "}
                1 Star & above
              </label>
              <br />
              <br />
              <h5>Sort by</h5>
              <label for="lowToHigh">
                <input
                  type="radio"
                  name="sortBy"
                  value="Price-Low To High"
                  id="lowToHigh"
                  onChange={handleSortChange}
                  checked={sortBy === "Price-Low To High"}
                />{" "}
                Price-Low To High
              </label>
              <br />
              <label for="highToLow">
                <input
                  type="radio"
                  name="sortBy"
                  value="Price-High To Low"
                  id="highToLow"
                  onChange={handleSortChange}
                  checked={sortBy === "Price-High To Low"}
                />{" "}
                Price-High To Low
              </label>
            </div>

            <div className="col-md-9 bg-light py-4 px-4">
              <h5>
                Showing All Products{" "}
                <small>
                  <span>
                    {" "}
                    <small>(Showing {filteredOutfits.length} products) </small>
                  </span>
                </small>
              </h5>
              <p>
                <i>Find your perfect style match right here!🥰</i>
              </p>
              <hr />

              <div className="row">
                {filteredOutfits.map((outfit) => (
                  <div className="col-md-3 mb-1" key={outfit._id}>
                    <div className="card text-center">
                      <img
                        src={outfit.imgUrl}
                        className="card-img-top"
                        alt={outfit.title}
                        style={{ height: "275px", width: "250px" }}
                        onClick={() => navigate(`/details/${outfit._id}`)}
                      />
                      <button
                        onClick={() => handleAddToWishlist(outfit)}
                        className="position-absolute top-0 end-0 m-1 fs-4"
                        style={{
                          background: "none",
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                          border: "1px solid",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderColor: "lightgray",
                        }}>
                        {wishlistItems.some((item) => item._id === outfit._id)
                          ? "❤️"
                          : "🤍"}
                      </button>
                      <div className="card-body">
                        <hr />
                        <h6>{outfit.title}</h6>
                        <h5>₹ {outfit.price}</h5>

                        <div className="d-grid gap-2">
                          <button
                            onClick={() => handleToggleCart(outfit)}
                            className="btn btn-outline-primary">
                            {cartItems.some((item) => item._id === outfit._id)
                              ? " Remove from Cart"
                              : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            {loading && (
              <p className="alert alert-primary">Loading Products List...</p>
            )}
            {error && (
              <p className="alert alert-danger">
                Error loading products: {error}
              </p>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
