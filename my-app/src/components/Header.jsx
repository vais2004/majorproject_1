// // import { a } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// //import {BsSearch,BsHeart,BsCart} from "react-icons/bs"

// export default function Header() {
//   const navigate =useNavigate()
//   return (
//     <>
//       <header className="bg-light py-2">
//         <div className="container">
//           <nav className="navbar navbar-expand-lg bg-body-tertiary">
          
//             <div className="container-fluid">
//               <a className="navbar-brand " onClick ={()=>navigate('/')}>
//               MyStyleSpot
//               </a>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarNav"
//                 aria-controls="navbarNav"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>

//               <div className="collapse navbar-collapse" id="navbarNav">
              
//               {/* <form className="d-flex" role="search">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//               </form>

//               <i className="bi bi-heart px-2">
             
//               </i>
//               <i class="bi bi-cart4 px-2">Cart</i> */}

//               <div className="search-bar d-flex align-items-center">
//                 <div className="input-group">
//                   <span className="input-group-text bg-white border-end-0">
                  
//                   </span>
//                   <input type="text" className="form-control border-start-0" placeholder="Search" aria-label="Search"/>
//                 </div>
//               </div>

                

//               </div>
//             </div>
            
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }

import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a className="navbar-brand" href="#">
        MyShoppingSite
      </a>
      <form className="form-inline my-2 my-lg-0 mx-auto">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
      </form>
      <div>
        <button className="btn btn-outline-secondary mx-2">Login</button>
        <i className="bi bi-heart mx-2"></i>
        <i className="bi bi-cart mx-2"></i>
      </div>
    </nav>
  );
};

export default Navbar;

