import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from './components/Footer';
import Header from './components/Header';
import { useNavigate } from 'react-router-dom';

function App() {

  const categories = ["Men", "Women", "Kids"];

  const navigate= useNavigate()
  return (
    <>
      <Header />
      <main className="container pt-3">
        <div>
          <div className="row justify-content-center">
            <div className="col-md-4 d-flex justify-content-center mb-3 ">
              <div className='bg-light'>
            <div><span className="badge text-bg-secondary px-2 py-2 fs-5">Men</span></div>
              <img
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png"
                alt="mens"
                style={{ width: "200px", height: "200px" }}
              />
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center mb-3">
            <div className='bg-light'>
            <div><span className="badge text-bg-secondary px-2 py-2 fs-5">Women</span></div>
            <img
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-256.png"
                alt="womens"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center mb-3">
            <div className='bg-light'>
            <div><span className="badge text-bg-secondary px-2 py-2 fs-5">Kids</span></div>
               <img
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/girl-512.png"
                alt="kids"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            </div>
          </div>
        </div>

       

 <div className='mt-5'>    
<div className='bg-light'>
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://static.vecteezy.com/system/resources/previews/004/759/229/non_2x/super-big-sale-background-free-vector.jpg" className="d-block w-100 img-fluid" onClick={()=>navigate('/products')} style={{height:'550px', width:'1250px'}} alt="..."/>  <div className="carousel-caption d-none d-md-block">
      
        <h3>BUY 1 GET 1 FREE</h3>
        <p>Gen Young Fashion from Rs.249 + Extra discount + Free delivery</p>
      </div>

      
    </div>
    <div className="carousel-item">
    <img src="https://assets-global.website-files.com/6523ed2d670117e5922bd1d3/6569c51a8f5de07a8689b3cc_655222fa52c3b2554888c9a6_Retail-Software-Development.jpeg" className="d-block w-100 img-fluid" onClick={()=>navigate('/products')} style={{height:'550px', width:'1250px'}} alt="..."/>
      
    </div>
    <div className="carousel-item">
    <img src="https://explainerd.com/wp-content/uploads/2022/08/Ecommerce-Product-Videos-The-Definitive-Guide.jpg" className="d-block w-100 img-fluid" onClick={()=>navigate('/products')} style={{height:'550px', width:'1250px'}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>


<div className='row my-4'>
  <div className='col-md-6'>
    <div className='d-flex bg-light p-3 my-3' style={{}}>
      <img src='https://thumbs.dreamstime.com/b/hand-drawn-fashion-woman-clothes-vector-accessories-watercolor-sketch-outfit-modern-illustration-model-summer-beautiful-style-127472984.jpg' style={{width:'150px', height:'150px'}}/>
<div className='ms-3'>
  <small>NEW ARRIVALS</small>
  <h5><b>Summer Collection</b></h5>
  <p className='text-muted'>Check out our best winter collection to stay warm in style this season.</p>
</div>
      
    </div>
  </div>

  <div className='col-md-6'>
    <div className='d-flex bg-light p-3 my-3' style={{}}>
      <img src='https://thumbs.dreamstime.com/b/hand-drawn-fashion-woman-clothes-vector-accessories-watercolor-sketch-outfit-modern-illustration-model-summer-beautiful-style-127472984.jpg' style={{width:'150px', height:'150px'}}/>
<div className='ms-3'>
  <small>NEW ARRIVALS</small>
  
  <h5><b>Summer Collection</b></h5>
  <p className="text-muted">Check out our best winter collection to stay warm in style this season.</p>
</div>
      
    </div>
  </div>
</div>

      </main>

      <Footer />
    </>
  );
}

export default App;
