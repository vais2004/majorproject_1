// // // import { useEffect } from "react";
// // // import Footer from "../components/Footer";
// // // import Header from "../components/Header";
// // // import {
// // //   addToCart,
// // //   removeFromCart,
// // //   updateQuantity,
// // // } from "../features/cartReducer";
// // // import { useSelector, useDispatch } from "react-redux";

// // // export default function Cart() {
// // //   const cart = useSelector((state) => state.cart);
// // //   const { cartItems } = cart;
// // //   const dispatch = useDispatch();
// // //   //console.log("cart", cart);
// // //   // useEffect(() =());
// // //   // }, [dispatch]);

// // //   const getTotal = () => {
// // //     return cartItems.reduce((acc, curr) => {
// // //       return acc + curr.price * curr.quantity;
// // //       // return total+itemTotal
// // //     }, 0);
// // //   };
// // //   return (
// // //     <>
// // //       <Header />
// // //       <main className="container py-5">
// // //         <h2>My Cart</h2>
// // //         {(cartItems.length || 0) === 0 ? (
// // //           <p className="alert alert-primary">Your cart is empty.</p>
// // //         ) : (
// // //           <div className="col-md-6">
// // //             {cartItems.map((item) => (
// // //               <div className="card" key={item._id}>
// // //                 <img
// // //                   src={item.imgUrl}
// // //                   className=" py-4 card-img-top d-grid gap-2 col-6 mx-auto "
// // //                   style={{ height: "275px", width: "250px" }}
// // //                   alt={item.title}
// // //                 />
// // //                 <div className="card-body">
// // //                   <h5 className="card-title">{item.title}</h5>
// // //                   <p className="card-text">
// // //                     <strong>{item.price}</strong>
// // //                   </p>
// // //                   <p>{item.discount}</p>
// // //                   <p>
// // //                     Quantity:
// // //                     <button
// // //                       onClick={() =>
// // //                         dispatch(updateQuantity(item._id, item.quantity + 1))
// // //                       }>
// // //                       +
// // //                     </button>
// // //                     <span>{item.quantity}</span>
// // //                     <button
// // //                       onClick={() => {
// // //                         if (item.quantity > 1) {
// // //                           dispatch(updateQuantity(item._id, item.quantity - 1));
// // //                         }
// // //                       }}>
// // //                       -
// // //                     </button>
// // //                   </p>
// // //                   <button
// // //                     onClick={() => dispatch(removeFromCart(item._id))}
// // //                     className="btn btn-secondary">
// // //                     Remove From Cart
// // //                   </button>
// // //                   <button href="" className="btn btn-light">
// // //                     Add to Wishlist
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //             <hr />
// // //             <h4>Total Amount: {getTotal().toFixed(2)}</h4>
// // //           </div>
// // //         )}
// // //       </main>
// // //       <Footer />
// // //     </>
// // //   );
// // // }
// // import { useEffect } from "react";
// // import Footer from "../components/Footer";
// // import Header from "../components/Header";
// // import {
// //   addToCart,
// //   removeFromCart,
// //   updateQuantity,

// // } from "../features/cartReducer";
// // import { useSelector, useDispatch } from "react-redux";
// // import { Link } from "react-router-dom";
// // import { addToWishlist,removeFromWishlist } from "../features/wishlistReducer";

// // export default function Cart() {
// //   const cart = useSelector((state) => state.cart);
// //   const { cartItems } = cart;
// //   const dispatch = useDispatch();

// //     const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

// //     const handleAddToWishlist = (outfit) => {
// //         const isInWishlist = wishlistItems.some(
// //           (item) => item._id === outfit._id
// //         );
// //         if (isInWishlist) {
// //           dispatch(removeFromWishlist(outfit._id));
// //           console.log("Removed from wishlist:", outfit._id);
// //         } else {
// //           dispatch(addToWishlist(outfit));
// //           console.log("Added to wishlist:", outfit._id);
// //         }
// //       };

// //   const getTotal = () => {
// //     return cartItems.reduce((acc, curr) => {
// //       return acc + curr.price * curr.quantity;
// //     }, 0);
// //   };

// //   const discountPrice = getTotal() * 0.8;

// //   return (
// //     <>
// //       <Header />
// //       <main className="container py-5">
// //   <h2 className="mb-3">My Cart</h2>
// //   <span >
// //     Total items in cart:{" "}
// //     {cartItems.reduce((total, item) => total + item.quantity, 0)}
// //   </span>
// //   <hr />

// //   {cartItems.length === 0 ? (
// //     <>
// //       <p className="alert alert-warning text-center">Your cart is empty...!</p>
// //       <h4 className="text-secondary text-center mt-5">
// //         Your cart’s looking a little lonely… maybe it needs a friend!
// //       </h4>
// //       <h6 className="text-center text-success">
// //         You're just getting started! There's so much more waiting to be discovered —
// //         whether it's a hidden gem or that perfect item you didn't know you needed.
// //         Keep exploring, keep adding, and let your cart tell the story of a great shopping spree!
// //       </h6>
// //       <div className="d-grid gap-2 col-4 mx-auto py-4">
// //         <Link className="btn btn-outline-warning" to="/products">
// //           Continue shopping...!
// //         </Link>
// //       </div>
// //     </>
// //   ) : (
// //     <div className="row">
// //       {/* Cart Items Column */}
// //       <div className="col-md-6 ">
// //         {cartItems.map((product) => (
// //           <div className="card mb-2" key={product._id}>
// //             <div className="row g-0">
// //               <div className="col-md-4 position-relative">
// //                 <img
// //                   src={product.imgUrl}
// //                   className="img-fluid py-2 ps-3 pe-3 me-3 rounded-start"
// //                   alt={product.title}
// //                   style={{ height: "100%", }}
// //                 />
// //                 <button
// //                   onClick={() => handleAddToWishlist(product)}
// //                   className="position-absolute top-0 end-0 m-2 fs-5"
// //                   style={{
// //                     background: "white",
// //                     border: "1px solid #ccc",
// //                     width: "35px",
// //                     height: "35px",
// //                     borderRadius: "50%",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                     cursor: "pointer",
// //                   }}
// //                   aria-label="Toggle Wishlist"
// //                 >
// //                   {wishlistItems.some((item) => item._id === product._id) ? "❤️" : "🤍"}
// //                 </button>
// //               </div>
// //               <div className="col-md-8 pt-4 ps-5">
// //                 <div className="card-body">
// //                   <h5 className="card-title">{product.title}</h5>
// //                   <p className="card-text mb-1">
// //                     Price: <strong>₹{product.price}</strong>
// //                   </p>
// //                   <p className="text-muted">{product.discount}</p>
// //                   <div className="mb-3">
// //                     <span className="me-2">Quantity:</span>
// //                     <button
// //                       className="btn btn-outline-primary btn-sm me-2"
// //                       onClick={() =>
// //                         dispatch(updateQuantity(product._id, product.quantity + 1))
// //                       }
// //                     >
// //                       +
// //                     </button>
// //                     <span className="fw-bold">{product.quantity}</span>
// //                     <button
// //                       className="btn btn-outline-secondary btn-sm ms-2"
// //                       onClick={() => {
// //                         if (product.quantity > 1) {
// //                           dispatch(updateQuantity(product._id, product.quantity - 1));
// //                         }
// //                       }}
// //                     >
// //                       -
// //                     </button>
// //                   </div>
// //                   <button
// //                     onClick={() => dispatch(removeFromCart(product._id))}
// //                     className="btn btn-outline-danger"
// //                   >
// //                     Remove From Cart
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //           <div className="col-md-4 bg-white p-4 rounded shadow-sm">
// //       <h5 className="fw-bold mb-4">PRICE DETAILS</h5>
// //       <ul className="list-unstyled mb-3">
// //         <li className="d-flex justify-content-between mb-2">
// //           <span>Price (1 item)</span>
// //           <span>₹2000</span>
// //         </li>
// //         <li className="d-flex justify-content-between mb-2">
// //           <span>Discount</span>
// //           <span className="text-success">- ₹1000</span>
// //         </li>
// //         <li className="d-flex justify-content-between mb-2">
// //           <span>Delivery Charges</span>
// //           <span>₹499</span>
// //         </li>
// //         <hr />
// //         <li className="d-flex justify-content-between fw-bold fs-5">
// //           <span>Total Amount</span>
// //           <span>₹2499</span>
// //         </li>
// //       </ul>
// //       <p className="text-success">You will save ₹1000 on this order</p>
// //       <button className="btn btn-primary w-100 mt-3">PLACE ORDER</button>
// //     </div>
// //   </div>
// //     </>
// //         )}
// // </main>

//       {/* <main className="container py-5">
//         <h2>My Cart</h2><span>
//   Total items in cart:{" "}
//   {cartItems.reduce((total, item) => total + item.quantity, 0)}
// </span>
// <hr/>
//         {cartItems.length === 0 ? (
//           <>

//           <p className="alert alert-warning text-center">Your cart is empty...!</p>
//           <h4 className="text-secondary text-center mt-5">our cart’s looking a little lonely… maybe it needs a friend! </h4>
//           <h6 className="text-center text-success">You're just getting started! There's so much more waiting to be discovered — whether it's a hidden gem or that perfect item you didn't know you needed. Keep exploring, keep adding, and let your cart tell the story of a great shopping spree!</h6>
//           <div className="d-grid gap-2 col-4 mx-auto py-4">
//           <Link className="btn btn-outline-warning align-center" to='/products'>Continue shopping...!</Link>
//           </div></>
// ) : (<>

//           <div className="row">
//             <div className="col-md-6">
//               {cartItems.map((product) => (

//                 <div className="card bg-light mt-2" key={product._id}>
//                   <div className="row">
//     <div className="col-md-2 pb-4 ps-4">
//        <div
//                     className="position-relative d-flex justify-content-center"
//                     style={{
//                       height: "275px",
//                       width: "250px",
//                       margin: "0 auto",
//                     }}
//                   >
//                   <img
//                     src={product.imgUrl}
//                     className="py-3 card-img-top d-grid gap-2  mx-auto"
//                     style={{ height: "300px", width: "270px" }}
//                     alt={product.title}
//                   />
//                   <button
//                       onClick={() => handleAddToWishlist(product)}
//                       className="position-absolute top-0 end-0 m-1 fs-5"
//                       style={{
//                         background: "none",
//                         width: "35px",
//                         height: "35px",
//                         borderRadius: "50%",
//                         border: "1px solid lightgray",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         padding: 0,
//                         cursor: "pointer",
//                       }}
//                       aria-label="Toggle Wishlist"
//                     >
//                       {wishlistItems.some((item) => item._id === product._id)
//                         ? "❤️"
//                         : "🤍"}
//                     </button>
//                   </div>
//                   </div>

//                   <div className="col-md-10 " >
//                   <div className="card-body ">
//                     <h5 className="card-title">{product.title}</h5>
//                     <p className="card-text">
//                       Price: <strong>₹{product.price}</strong>
//                     </p>
//                     <p>{product.discount}</p>
//                     <p>
//                       Quantity:{" "}
//                       <button
//                         className="btn btn-outline-primary btn-sm"
//                         onClick={() =>
//                           dispatch(updateQuantity(product._id, product.quantity + 1))
//                         }>
//                         +
//                       </button>{' '}
//                       <span className="fs-5"> {product.quantity} </span>{' '}
//                       <button
//                         className="btn btn-outline-secondary btn-sm"
//                         onClick={() => {
//                           if (product.quantity > 1) {
//                             dispatch(
//                               updateQuantity(product._id, product.quantity - 1)
//                             );
//                           }
//                         }}>
//                         -
//                       </button>
//                     </p>
//                     <div className="d-grid gap-2 mx-auto col-6">
//                     <button
//                       onClick={() => dispatch(removeFromCart(product._id))}
//                       className="btn btn-outline-danger ">
//                       Remove From Cart
//                     </button>

//                     </div>
//                   </div>
//                   </div>
//                   </div>
//                 </div>
//               ))}
//              </div>

//   {/* Right column - Total Amount */}
//   {/* <div className="col-md-4 my-3">
//     <div className=" p-3 shadow-sm">
//       <h4 className="text-danger">
//         <s>Total Amount: ₹{getTotal().toFixed(2)}</s>
//       </h4>
//       <h3>
//         Discounted Price:{" "}
//         <u className="text-success">₹{discountPrice.toFixed(2)}</u>
//       </h3>
//       <p className="text-secondary">Yay! You saved 20% on your order!</p>
//     </div>
//   </div>
// </div>

//            </>
//         )}
//       </main> */}
//       import { useEffect } from "react";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import {
//   addToCart,
//   removeFromCart,
//   updateQuantity,

// } from "../features/cartReducer";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { addToWishlist,removeFromWishlist } from "../features/wishlistReducer";

// export default function Cart() {
//   const cart = useSelector((state) => state.cart);
//   const { cartItems } = cart;
//   const dispatch = useDispatch();

//     const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

//     const handleAddToWishlist = (outfit) => {
//         const isInWishlist = wishlistItems.some(
//           (item) => item._id === outfit._id
//         );
//         if (isInWishlist) {
//           dispatch(removeFromWishlist(outfit._id));
//           console.log("Removed from wishlist:", outfit._id);
//         } else {
//           dispatch(addToWishlist(outfit));
//           console.log("Added to wishlist:", outfit._id);
//         }
//       };

//   const getTotal = () => {
//     return cartItems.reduce((acc, curr) => {
//       return acc + curr.price * curr.quantity;
//     }, 0);
//   };

//   const discountPrice = getTotal() * 0.8;

//   return (
//     <>
//       <Header />
//       <main className="container py-5">
//   <h2 className="mb-3">My Cart</h2>
//   <span >
//     Total items in cart:{" "}
//     {cartItems.reduce((total, item) => total + item.quantity, 0)}
//   </span>
//   <hr />

//   {cartItems.length === 0 ? (
//     <>
//       <p className="alert alert-warning text-center">Your cart is empty...!</p>
//       <h4 className="text-secondary text-center mt-5">
//         Your cart’s looking a little lonely… maybe it needs a friend!
//       </h4>
//       <h6 className="text-center text-success">
//         You're just getting started! There's so much more waiting to be discovered —
//         whether it's a hidden gem or that perfect item you didn't know you needed.
//         Keep exploring, keep adding, and let your cart tell the story of a great shopping spree!
//       </h6>
//       <div className="d-grid gap-2 col-4 mx-auto py-4">
//         <Link className="btn btn-outline-warning" to="/products">
//           Continue shopping...!
//         </Link>
//       </div>
//     </>
//   ) : (
//     <div className="row">
//       {/* Cart Items Column */}
//       <div className="col-md-6 ">
//         {cartItems.map((product) => (
//           <div className="card mb-2" key={product._id}>
//             <div className="row g-0">
//               <div className="col-md-4 position-relative">
//                 <img
//                   src={product.imgUrl}
//                   className="img-fluid py-2 ps-3 pe-3 me-3 rounded-start"
//                   alt={product.title}
//                   style={{ height: "100%", }}
//                 />
//                 <button
//                   onClick={() => handleAddToWishlist(product)}
//                   className="position-absolute top-0 end-0 m-2 fs-5"
//                   style={{
//                     background: "white",
//                     border: "1px solid #ccc",
//                     width: "35px",
//                     height: "35px",
//                     borderRadius: "50%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     cursor: "pointer",
//                   }}
//                   aria-label="Toggle Wishlist"
//                 >
//                   {wishlistItems.some((item) => item._id === product._id) ? "❤️" : "🤍"}
//                 </button>
//               </div>
//               <div className="col-md-8 pt-4 ps-5">
//                 <div className="card-body">
//                   <h5 className="card-title">{product.title}</h5>
//                   <p className="card-text mb-1">
//                     Price: <strong>₹{product.price}</strong>
//                   </p>
//                   <p className="text-muted">{product.discount}</p>
//                   <div className="mb-3">
//                     <span className="me-2">Quantity:</span>
//                     <button
//                       className="btn btn-outline-primary btn-sm me-2"
//                       onClick={() =>
//                         dispatch(updateQuantity(product._id, product.quantity + 1))
//                       }
//                     >
//                       +
//                     </button>
//                     <span className="fw-bold">{product.quantity}</span>
//                     <button
//                       className="btn btn-outline-secondary btn-sm ms-2"
//                       onClick={() => {
//                         if (product.quantity > 1) {
//                           dispatch(updateQuantity(product._id, product.quantity - 1));
//                         }
//                       }}
//                     >
//                       -
//                     </button>
//                   </div>
//                   <button
//                     onClick={() => dispatch(removeFromCart(product._id))}
//                     className="btn btn-outline-danger"
//                   >
//                     Remove From Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//           <li className="d-flex justify-content-between mb-2">
//   <span>Price ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})</span>
//   <span>₹{getTotal().toFixed(2)}</span>
// </li>
// <li className="d-flex justify-content-between mb-2">
//   <span>Discount</span>
//   <span className="text-success">- ₹{(getTotal() * 0.2).toFixed(2)}</span>
// </li>
// <li className="d-flex justify-content-between mb-2">
//   <span>Delivery Charges</span>
//   <span>₹{cartItems.length > 0 ? 499 : 0}</span>
// </li>
// <hr />
// <li className="d-flex justify-content-between fw-bold fs-5">
//   <span>Total Amount</span>
//   <span>
//     ₹
//     {(
//       discountPrice + (cartItems.length > 0 ? 499 : 0)
//     ).toFixed(2)}
//   </span>
// </li>
// </div>
//   )}
//       <Footer />

//   )
// }
// {/* </main>import { useEffect } from "react";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import {
//   addToCart,
//   removeFromCart,
//   updateQuantity,

// } from "../features/cartReducer";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { addToWishlist,removeFromWishlist } from "../features/wishlistReducer";

// export default function Cart() {
//   const cart = useSelector((state) => state.cart);
//   const { cartItems } = cart;
//   const dispatch = useDispatch();

//     const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

//     const handleAddToWishlist = (outfit) => {
//         const isInWishlist = wishlistItems.some(
//           (item) => item._id === outfit._id
//         );
//         if (isInWishlist) {
//           dispatch(removeFromWishlist(outfit._id));
//           console.log("Removed from wishlist:", outfit._id);
//         } else {
//           dispatch(addToWishlist(outfit));
//           console.log("Added to wishlist:", outfit._id);
//         }
//       };

//   const getTotal = () => {
//     return cartItems.reduce((acc, curr) => {
//       return acc + curr.price * curr.quantity;
//     }, 0);
//   };

//   const discountPrice = getTotal() * 0.8;

//   return (
//     <>
//       <Header />
//       <main className="container py-5">
//   <h2 className="mb-3">My Cart</h2>
//   <span >
//     Total items in cart:{" "}
//     {cartItems.reduce((total, item) => total + item.quantity, 0)}
//   </span>
//   <hr />

//   {cartItems.length === 0 ? (
//     <>
//       <p className="alert alert-warning text-center">Your cart is empty...!</p>
//       <h4 className="text-secondary text-center mt-5">
//         Your cart’s looking a little lonely… maybe it needs a friend!
//       </h4>
//       <h6 className="text-center text-success">
//         You're just getting started! There's so much more waiting to be discovered —
//         whether it's a hidden gem or that perfect item you didn't know you needed.
//         Keep exploring, keep adding, and let your cart tell the story of a great shopping spree!
//       </h6>
//       <div className="d-grid gap-2 col-4 mx-auto py-4">
//         <Link className="btn btn-outline-warning" to="/products">
//           Continue shopping...!
//         </Link>
//       </div>
//     </>
//   ) : (
//     <div className="row">
//       {/* Cart Items Column */}
//       <div className="col-md-6 ">
//         {cartItems.map((product) => (
//           <div className="card mb-2" key={product._id}>
//             <div className="row g-0">
//               <div className="col-md-4 position-relative">
//                 <img
//                   src={product.imgUrl}
//                   className="img-fluid py-2 ps-3 pe-3 me-3 rounded-start"
//                   alt={product.title}
//                   style={{ height: "100%", }}
//                 />
//                 <button
//                   onClick={() => handleAddToWishlist(product)}
//                   className="position-absolute top-0 end-0 m-2 fs-5"
//                   style={{
//                     background: "white",
//                     border: "1px solid #ccc",
//                     width: "35px",
//                     height: "35px",
//                     borderRadius: "50%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     cursor: "pointer",
//                   }}
//                   aria-label="Toggle Wishlist"
//                 >
//                   {wishlistItems.some((item) => item._id === product._id) ? "❤️" : "🤍"}
//                 </button>
//               </div>
//               <div className="col-md-8 pt-4 ps-5">
//                 <div className="card-body">
//                   <h5 className="card-title">{product.title}</h5>
//                   <p className="card-text mb-1">
//                     Price: <strong>₹{product.price}</strong>
//                   </p>
//                   <p className="text-muted">{product.discount}</p>
//                   <div className="mb-3">
//                     <span className="me-2">Quantity:</span>
//                     <button
//                       className="btn btn-outline-primary btn-sm me-2"
//                       onClick={() =>
//                         dispatch(updateQuantity(product._id, product.quantity + 1))
//                       }
//                     >
//                       +
//                     </button>
//                     <span className="fw-bold">{product.quantity}</span>
//                     <button
//                       className="btn btn-outline-secondary btn-sm ms-2"
//                       onClick={() => {
//                         if (product.quantity > 1) {
//                           dispatch(updateQuantity(product._id, product.quantity - 1));
//                         }
//                       }}
//                     >
//                       -
//                     </button>
//                   </div>
//                   <button
//                     onClick={() => dispatch(removeFromCart(product._id))}
//                     className="btn btn-outline-danger"
//                   >
//                     Remove From Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//           <div className="col-md-4 bg-white p-4 rounded shadow-sm">
//       <h5 className="fw-bold mb-4">PRICE DETAILS</h5>
//       <ul className="list-unstyled mb-3">
//         <li className="d-flex justify-content-between mb-2">
//           <span>Price (1 item)</span>
//           <span>₹2000</span>
//         </li>
//         <li className="d-flex justify-content-between mb-2">
//           <span>Discount</span>
//           <span className="text-success">- ₹1000</span>
//         </li>
//         <li className="d-flex justify-content-between mb-2">
//           <span>Delivery Charges</span>
//           <span>₹499</span>
//         </li>
//         <hr />
//         <li className="d-flex justify-content-between fw-bold fs-5">
//           <span>Total Amount</span>
//           <span>₹2499</span>
//         </li>
//       </ul>
//       <p className="text-success">You will save ₹1000 on this order</p>
//       <button className="btn btn-primary w-100 mt-3">PLACE ORDER</button>
//     </div>
//   </div> */}

import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "../features/cartReducer";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToWishlist, removeFromWishlist } from "../features/wishlistReducer";
import { useNavigate } from "react-router-dom";

export default function Cart() {
const navigate =useNavigate()
const goToPlaceOrder=()=>{
  navigate('/place-order')
}

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

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

  const getTotal = () => {
    return cartItems.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
  };

  const discountPrice = getTotal() * 0.8;

  return (
    <>
      <Header />
      <main className="container py-5">
        <h2 className="mb-3">My Cart</h2>
        <span>
          Total items in cart:{" "}
          {cartItems.reduce((total, item) => total + item.quantity, 0)}
        </span>
        <hr />

        {cartItems.length === 0 ? (
          <>
            <p className="alert alert-warning text-center">
              Your cart is empty...!
            </p>
            <h4 className="text-secondary text-center mt-5">
              Your cart’s looking a little lonely… maybe it needs a friend!
            </h4>
            <h6 className="text-center text-success">
              You're just getting started! There's so much more waiting to be
              discovered — whether it's a hidden gem or that perfect item you
              didn't know you needed. Keep exploring, keep adding, and let your
              cart tell the story of a great shopping spree!
            </h6>
            <div className="d-grid gap-2 col-4 mx-auto py-4">
              <Link className="btn btn-outline-warning" to="/products">
                Continue shopping...!
              </Link>
            </div>
          </>
        ) : (
          <div className="row">
            {/* Cart Items Column */}
            <div className="col-md-6 ">
              {cartItems.map((product) => (
                <div className="card mb-2" key={product._id}>
                  <div className="row g-0">
                    <div className="col-md-4 position-relative">
                      <img
                        src={product.imgUrl}
                        className="img-fluid py-2 ps-2 pe-2 me-3 rounded-start"
                        alt={product.title}
                        style={{ height: "100%" }}
                      />
                      <button
                        onClick={() => handleAddToWishlist(product)}
                        className="position-absolute top-0 end-0 m-2 fs-5"
                        style={{
                          background: "white",
                          border: "1px solid #ccc",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                        aria-label="Toggle Wishlist">
                        {wishlistItems.some((item) => item._id === product._id)
                          ? "❤️"
                          : "🤍"}
                      </button>
                    </div>
                    <div className="col-md-8 pt-3 ps-5">
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-4">
                          {product.title}
                        </h5>
                        <p className="card-text mb-1">
                          Price:{" "}
                          <strong>
                            ₹{product.price * 0.8}{" "}
                            <span className="text-muted">
                              <strike>₹{product.price}</strike>
                            </span>
                          </strong>
                        </p>

                        <p className="text-muted">
                          <b>20% off</b>
                        </p>

                        <div className="mb-3">
                          <span className="me-2">Quantity:</span>
                          <button
                            className="btn btn-outline-primary btn-sm me-2"
                            onClick={() =>
                              dispatch(
                                updateQuantity(
                                  product._id,
                                  product.quantity + 1
                                )
                              )
                            }>
                            +
                          </button>
                          <span className="fw-bold">{product.quantity}</span>
                          <button
                            className="btn btn-outline-secondary btn-sm ms-2"
                            onClick={() => {
                              if (product.quantity > 1) {
                                dispatch(
                                  updateQuantity(
                                    product._id,
                                    product.quantity - 1
                                  )
                                );
                              }
                            }}>
                            -
                          </button>
                        </div>
                        <button
                          onClick={() => dispatch(removeFromCart(product._id))}
                          className="btn btn-outline-danger">
                          Remove From Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>


            <div className="col-md-5 bg-white p-4 rounded ms-5">
              <div className="ps-5">
              <h5 className="fw-bold mb-4">PRICE DETAILS</h5>
              <hr />
              <ul className="list-unstyled mb-3">
                <li className="d-flex justify-content-between mb-2">
                  <span>Total item quantity</span>
                  <span>
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </span>
                </li>
                <hr />
                <li className="d-flex justify-content-between mb-2">
                  <span>
                    Price
                  </span>
                  <span>₹{getTotal().toFixed(2)}</span>
                </li>

                <li className="d-flex justify-content-between mb-2">
                  <span>Discount</span>
                  <span className="text-success">
                    - ₹{(getTotal() * 0.2).toFixed(2)}
                  </span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span>Delivery Charges</span>
                  <span className="text-danger">₹{cartItems.length > 0 ? 99 : 0}</span>
                </li>
                <hr />
                <li className="d-flex justify-content-between fw-bold fs-5">
                  <span>Total Amount</span>
                  <span>
                    ₹
                    {(discountPrice + (cartItems.length > 0 ? 99 : 0)).toFixed(
                      2
                    )}
                  </span>
                </li>
              </ul>
              <p className="text-success">
                You will save ₹{(getTotal() * 0.2).toFixed(2)} on this order
              </p>
              <button onClick={goToPlaceOrder} className="btn btn-primary w-100 mt-3">
                PLACE ORDER
              </button>
            </div>
          </div>
          </div>
        
        )}
      </main>
      <Footer />
    </>
  );
}
