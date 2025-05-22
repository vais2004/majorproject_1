// // src/features/cartActions.js

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Replace this with your actual cart API endpoint
// const API_URL = "https://your-api-url.com/cart";

// // Fetch all items in the cart
// export const fetchCartItems = createAsyncThunk(
//   "cart/fetchCartItems",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(API_URL);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// // Add an item to the cart
// export const addToCartAsync = createAsyncThunk(
//   "cart/addToCart",
//   async (item, thunkAPI) => {
//     try {
//       const response = await axios.post(API_URL, item);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// // Remove an item from the cart
// export const removeFromCartAsync = createAsyncThunk(
//   "cart/removeFromCart",
//   async (id, thunkAPI) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       return id;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// // Update the quantity of an item in the cart
// export const updateQuantityAsync = createAsyncThunk(
//   "cart/updateQuantity",
//   async ({ id, quantity }, thunkAPI) => {
//     try {
//       const response = await axios.put(`${API_URL}/${id}`, { quantity });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );
