import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../features/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const search = useSelector((state) => state.search.text);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  //const wishlistCount = useSelector((state) => state.wishlist.wishlistItems.length);
  const wishlistCount = useSelector(
    (state) => state.wishlist?.wishlistItems?.length || 0
  );
  console.log("Wishlist count in Navbar:", wishlistCount);

  const handleSearchChange = (event) => {
    const searched = event.target.value;
    dispatch(setSearchText(searched));
    navigate("/products");
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand" style={{ fontFamily: "cursive" }}>
          🛍️MyStyleSpot
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className=" col-lg-6 mx-auto my-2 my-lg-0">
            <div className="input-group" style={{ maxWidth: "100%" }}>
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-search"></i>
              </span>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                value={search}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <div className="navbar-nav ms-auto">
            <div className="btn-group" role="group">
              <Link to="/login" className="nav-link px-3">
                Login
              </Link>

              <Link
                to="/wishlist"
                className="nav-link pe-3 px-5 position-relative">
                Wishlist <i className="bi bi-heart"></i>
                <span
                  className="position-absolute top-0 me-5 mt-2  start-100 translate-middle badge rounded-pill bg-danger"
                  style={{
                    fontSize: "0.7rem",
                    transform: "translate(-50%, -50%)", // Explicit transform
                  }}>
                  {wishlistCount}
                </span>
              </Link>

              <Link to="/cart" className="nav-link pe-2 px-5 position-relative">
                Cart <i className="bi bi-cart4"></i>
                <span
                  className="position-absolute top-0 me-5 mt-2 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.7rem" }}>
                  {totalCartQuantity}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
