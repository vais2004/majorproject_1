// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";

// import "./index.css";
// import App from "./App";
// import ProductListingPage from "./pages/ProductListingPage";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";
// import ProductDetails from "./pages/ProductDetails";
// import WishlistPage from "./pages/Wishlist";
// import ProductByCategory from "./pages/ProductByCategory";
// import PlaceOrder from "./pages/PlaceOrder";

// import { store } from "./app/store";

// const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   { path: "/products", element: <ProductListingPage /> },
//   { path: "/login", element: <Login /> },
//   { path: "/cart", element: <Cart /> },
//   { path: "/wishlist", element: <WishlistPage /> },
//   { path: "/details/:id", element: <ProductDetails /> },
//   { path: "/outfits/:category", element: <ProductByCategory /> },
//   { path: "/place-order", element: <PlaceOrder /> },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // ✅ Import PersistGate

import "./index.css";
import App from "./App";
import ProductListingPage from "./pages/ProductListingPage";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import WishlistPage from "./pages/Wishlist";
import ProductByCategory from "./pages/ProductByCategory";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";

import { store, persistor } from "./app/store"; // ✅ Also import persistor

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/products", element: <ProductListingPage /> },
  { path: "/login", element: <Login /> },
  { path: "/cart", element: <Cart /> },
  { path: "/wishlist", element: <WishlistPage /> },
  { path: "/details/:id", element: <ProductDetails /> },
  { path: "/outfits/:category", element: <ProductByCategory /> },
  { path: "/place-order", element: <PlaceOrder /> },
  { path: "/orders", element: <Orders /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>  
  </React.StrictMode>
);