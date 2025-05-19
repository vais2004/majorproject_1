// import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// import axios from 'axios'
// import { act } from 'react'

// const API_URL = 'https://mystylespot-backend.onrender.com'

// export const fetchCartItems = createAsyncThunk('/cart', async ()=>{
//     const response= await axios.get(`${API_URL}/cart`)
//     const data =response.data
// console.log('cart-data',data)
//     return data.map(item=>({
//         _id: item._id,
//         title:item.title,
//         imgUrl:item.imgUrl,
//         category:item.category,
//         price:item.price,
//         rating:item.rating,
//         description:item.description,
//         size:item.size,
//         quantity:1
//     }))
// })

// export const addToCart = createAsyncThunk('/cart/addToCart', async ({ outfitId, quantity = 1 }) =>{
//     console.log('dat',outfitId,quantity)
//     try {
//         const res = await axios.post(`${API_URL}/cart/${outfitId}`, {quantity})
//         console.log('res',res.data)
//         return res.data
//     } catch (error) {
//         console.error(error)
//     }
// })

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//       items: [],
//       status: "idle",
//       error: null,
//     },
//     reducers: {
//       increaseQuantity: (state, action) => {
//         const item = state.items.find((product) => product.id === action.payload);
//         if (item) {
//           item.quantity += 1;
//         }
//       },
//       decreaseQuantity: (state, action) => {
//         const item = state.items.find((product) => product.id === action.payload);
//         if (item && item.quantity > 1) {
//           item.quantity -= 1;
//         }
//       },
//       removeItem: (state, action) => {
//         state.items = state.items.filter((product) => product.id !== action.payload);
//       },
//     },
//     extraReducers: (builder) => {
//       builder
//         .addCase(fetchCartItems.pending, (state) => {
//           state.status = "loading";
//         })
//         .addCase(fetchCartItems.fulfilled, (state, action) => {
//           state.status = "success";
//           state.items = action.payload;
//         })
//         .addCase(fetchCartItems.rejected, (state) => {
//           state.status = "error";
//           state.error = "Failed to fetch cart items.";
//         })
//         .addCase(addToCart.pending,(state,action)=>{
//             state.status = 'loading'
//         })
//         .addCase(addToCart.fulfilled,(state,action)=>{
//             state.status = 'success';
//             const updatedItem = action.payload;
//             const existingIndex = state.items.findIndex(item => item._id === updatedItem._id);

//             if (existingIndex !== -1) {
//                 state.items[existingIndex] = updatedItem;
//             } else {
//                 state.items.push(updatedItem); // in case it's a new addition
//             }
//         })
//     },
//   });

//   export const { increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;

//   export default cartSlice.reducer;


//PART 2 way 2
// const initialState = {
//   cartItems: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const existingOutfitIndex = state.cartItems.findIndex(
//         (item) => item._id === action.payload._id
//       );
//       if (existingOutfitIndex >= 0) {
//         const updatedCartItem = state.cartItems.map((item, index) =>
//           index === existingOutfitIndex
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//         return {
//           ...state,
//           cartItems: updatedCartItem,
//         };
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
//         };
//       }
//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(
//           (item) => item._id !== action.payload
//         ),
//       };
//     case "UPDATE_QUANTITY":
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) =>
//           item._id === action.payload._id
//             ? { ...item, quantity: action.payload.quantity }
//             : item
//         ),
//       };
//     default:
//       return state;
//   }
// };

// //actions
// export const addToCart = (product) => ({
//   type: "ADD_TO_CART",
//   payload: product,
// });

// export const removeFromCart = (productId) => ({
//   type: "REMOVE_FROM_CART",
//   payload: productId,
// });

// export const updateQuantity = (productId, quantity) => ({
//   type: "UPDATE_QUANTITY",
//   payload: { _id: productId, quantity },
// });

// export default cartReducer;


const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingProductIndex >= 0) {
        // If product already exists, update quantity
        const updatedCartItems = state.cartItems.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If product doesn't exist, add it to cart with quantity 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      // Remove item from cart by its ID
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      // Update quantity of specific item in cart
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};

// Action Creators
export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  payload: productId,
});

export const updateQuantity = (productId, quantity) => ({
  type: "UPDATE_QUANTITY",
  payload: { _id: productId, quantity },
});

export default cartReducer;
