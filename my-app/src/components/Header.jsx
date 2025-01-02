 
import React from "react";
import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
//       <a className="navbar-brand" href="/">
//       🛍️MyShoppingSite
//       </a>
//       <form className="form-inline my-2 my-lg-0 mx-auto">
//         <input className="form-control mr-sm-2" type="search" placeholder="Search" />
//       </form>
//       <div>
//         <button className="btn btn-outline-secondary mx-2">Login</button>
//         <i className="bi bi-heart mx-2"></i>
//         <i className="bi bi-cart mx-2"></i>
//       </div>
//     </nav>
//   );
// };

const Navbar = () => {
  return(
    <header className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link to="/" className="navbar-brand" style={{fontFamily:'cursive'}}>
      🛍️MyStyleSpot
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        
        <form className="form-inline my-2 my-lg-0 mx-auto">
          <div className="input-group">
            <span className="input-group-text" id='basic-addon1'><i className="bi bi-search"></i></span>
          
         <input className="form-control" type="search" placeholder="Search" />
         </div>
      </form>


        <div className="navbar-nav ms-auto">
          <div className="btn-group" role="group">

            <Link to="/login" className="nav-link px-3">
              Login
            </Link>
          
            <Link to="/" className="nav-link px-3">
              Wishlist <i className="bi bi-heart"></i>
            </Link>
          
            <Link to="/" className="nav-link px-3">
              Cart <i className="bi bi-cart4"></i>
            </Link>

          </div>
          
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar;
