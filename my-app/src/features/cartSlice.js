import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'
import { act } from 'react'

const API_URL = 'https://mystylespot-backend.onrender.com'

export const fetchCartItems = createAsyncThunk('/cart', async ()=>{
    const response= await axios.get(`${API_URL}/cart`)
    const data =response.data
console.log('cart-data',data)
    return data.map(item=>({
        _id: item._id,
        title:item.title,
        imgUrl:item.imgUrl,
        category:item.category,
        price:item.price,
        rating:item.rating,
        description:item.description,
        size:item.size,
        quantity:1
    }))
})

export const addToCart = createAsyncThunk('/cart/addToCart', async ({ outfitId, quantity = 1 }) =>{
    console.log('dat',outfitId,quantity)
    try {
        const res = await axios.post(`${API_URL}/cart/${outfitId}`, {quantity})
        console.log('res',res.data)
        return res.data
    } catch (error) {
        console.error(error)
    }
}) 

const cartSlice = createSlice({
    name: "cart",
    initialState: {
      items: [],
      status: "idle",
      error: null,
    },
    reducers: {
      increaseQuantity: (state, action) => {
        const item = state.items.find((product) => product.id === action.payload);
        if (item) {
          item.quantity += 1;
        }
      },
      decreaseQuantity: (state, action) => {
        const item = state.items.find((product) => product.id === action.payload);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
      },
      removeItem: (state, action) => {
        state.items = state.items.filter((product) => product.id !== action.payload);
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCartItems.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchCartItems.fulfilled, (state, action) => {
          state.status = "success";
          state.items = action.payload;
        })
        .addCase(fetchCartItems.rejected, (state) => {
          state.status = "error";
          state.error = "Failed to fetch cart items.";
        })
        .addCase(addToCart.pending,(state,action)=>{
            state.status = 'loading'
        })
        .addCase(addToCart.fulfilled,(state,action)=>{
            state.status = 'success';
            const updatedItem = action.payload;
            const existingIndex = state.items.findIndex(item => item._id === updatedItem._id);

            if (existingIndex !== -1) {
                state.items[existingIndex] = updatedItem;
            } else {
                state.items.push(updatedItem); // in case it's a new addition
            }
        })
    },
  });
  
  export const { increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
  
  export default cartSlice.reducer;