import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ProductDetails(){
    return(
        <>
        <Header/>
    
    <main className="bg-light">
      <div className="container py-5 px-5">
        <div className="card py-5">
          <div className="row">
            <div className="col-md-4">
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/71ltVJH47%2BL._AC_UL1335_.jpg"
                  className="card-img-top d-grid gap-2 col-6 mx-auto "
                  alt="img"
                  style={{ height: "275px", width: "250px" }}
                />
                <br />
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button className="btn btn-outline-primary ">
                    Add to Cart
                  </button>
                  <button className="btn btn-outline-secondary ">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3>Mens jacket</h3>
              <p>rating: 0 </p>
              <p>price: ₹500</p>
              <p>50% off</p>
              <p>Size: {}</p>

              <p>Quantity:0</p>
              <br />
              <p>
                <hr />
                <div class="row mb-4">
                  <div class="col-3 text-center">
                    <div class="fs-4 text-success mb-1">
                      <img
                        src="https://th.bing.com/th/id/OIP.c7nAP43v6auqEkcrG30IIgHaHa?rs=1&pid=ImgDetMain"
                        style={{ height: "50px", width: "50px" }}
                      />
                    </div>
                    <div class="small text-secondary">10 days Returntable</div>
                  </div>
                  <div class="col-3 text-center">
                    <div class="fs-4 text-success mb-1">
                      <img
                        src="https://th.bing.com/th/id/R.93f31d069567d92287a217aa607d39a2?rik=F%2ftEE4eBrxOoag&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffree-shipping-png-free-shipping-icon-1600.png&ehk=kPdnOmIwc3o91rZ6p8fnz%2frQGzTAGS7xjUBk0MGZa5M%3d&risl=&pid=ImgRaw&r=0"
                        style={{ height: "50px", width: "50px" }}
                      />
                    </div>
                    <div class="small text-secondary">Free Delivery</div>
                  </div>
                  <div class="col-3 text-center">
                    <div class="fs-4 text-success mb-1">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/10149/10149282.png"
                        style={{ height: "50px", width: "50px" }}
                      />
                    </div>
                    <div class="small text-secondary">Pay on Delivery</div>
                  </div>
                  <div class="col-3 text-center">
                    <div class="fs-4 text-success mb-1">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/8477/8477054.png"
                        style={{ height: "50px", width: "50px" }}
                      />
                    </div>
                    <div class="small text-secondary">Secure Payment</div>
                  </div>
                </div>

                <hr />
                <strong>Description:</strong>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  
        <Footer/>
        </>
    )
}