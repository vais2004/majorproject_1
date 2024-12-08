// import { a } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-light py-2">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
          
            <div className="container-fluid">
              <a className="navbar-brand " to="/">
                Company Logo
              </a>
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
              
              <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              </form>

              <i className="bi bi-heart px-2">
             
              </i>
              <i class="bi bi-cart4 px-2">Cart</i>
              </div>
            </div>
            
          </nav>
        </div>
      </header>
    </>
  );
}
