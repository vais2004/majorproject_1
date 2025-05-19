import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../features/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const search = useSelector((state) => state.search.text);

const handleSearchChange =(event)=>{
  const searched=event.target.value;
  dispatch(setSearchText(searched))
  navigate('/products')
}


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

              <Link to="/wishlist" className="nav-link px-3">
                Wishlist <i className="bi bi-heart"></i>
              </Link>

              <Link to="/cart" className="nav-link px-3">
                Cart <i className="bi bi-cart4"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
