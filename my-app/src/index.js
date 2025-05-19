import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import ProductListingPage from "./pages/ProductListingPage";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import WishlistPage from "./pages/Wishlist";
import ProductByCategory from "./pages/ProductByCategory";
import PlaceOrder from "./pages/PlaceOrder";
//import reportWebVitals from './reportWebVitals';
import { store } from "./app/store";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/products", element: <ProductListingPage /> },
  { path: "/login", element: <Login /> },
  { path: "/cart", element: <Cart /> },
  { path: "/wishlist", element: <WishlistPage /> },
  { path: "/details/:id", element: <ProductDetails /> },
  { path: "/outfits/:category", element: <ProductByCategory /> },
  { path: "/place-order", element: <PlaceOrder /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
