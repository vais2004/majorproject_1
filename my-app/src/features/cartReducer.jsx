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







// import axios from "axios";

// // Initial state
// const initialState = {
//   cartItems: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_CART_ITEMS":
//       return {
//         ...state,
//         cartItems: action.payload,
//       };

//     case "ADD_TO_CART":
//       const existingItem = state.cartItems.find(
//         (item) => item._id === action.payload._id
//       );
      
//       if (existingItem) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map(item =>
//             item._id === action.payload._id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           )
//         };
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, action.payload]
//         };
//       }

//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(item => item._id !== action.payload)
//       };

//     case "UPDATE_QUANTITY":
//       return {
//         ...state,
//         cartItems: state.cartItems.map(item =>
//           item._id === action.payload.id
//             ? { ...item, quantity: action.payload.quantity }
//             : item
//         )
//       };

//     default:
//       return state;
//   }
// };

// // Action Creators
// export const setCartItems = (items) => ({
//   type: "SET_CART_ITEMS",
//   payload: items,
// });

// // Async Thunks

// export const fetchCartItems = () => async (dispatch) => {
//   try {
//     const res = await axios.get("https://mystylespot-backend.onrender.com/cart");
//     const items = res.data.map((cartItem) => ({
//       _id: cartItem._id,             // cart entry id
//       cartItemId: cartItem._id,      // same as above, for consistency
//       productId: cartItem.product._id,
//       title: cartItem.product.name,   // changed from 'name' to 'title' to match your UI
//       price: cartItem.product.price,
//       imgUrl: cartItem.product.imgUrl, // make sure this matches your backend
//       quantity: cartItem.quantity,
//       // Include other product fields you need
//       ...cartItem.product             // spread all product properties
//     }));
//     dispatch(setCartItems(items));
//   } catch (error) {
//     console.error("Failed to fetch cart items:", error);
//   }
// };

// export const addToCartAsync = (product) => async (dispatch) => {
//   try {
//     const res = await axios.post(
//       `https://mystylespot-backend.onrender.com/cart/${product._id}`
//     );

//     const newItem = res.data.cartItem;

//     const cartItem = {
//       _id: newItem._id,
//       cartItemId: newItem._id,
//       productId: newItem.product._id,
//       title: newItem.product.name,
//       price: newItem.product.price,
//       imgUrl: newItem.product.imgUrl,
//       quantity: newItem.quantity,
//       ...newItem.product
//     };

//     dispatch({
//       type: "ADD_TO_CART",
//       payload: cartItem,
//     });
//   } catch (error) {
//     console.error("Failed to add to cart:", error);
//   }
// };

// export const removeFromCartAsync = (cartItemId) => async (dispatch) => {
//   try {
//     await axios.delete(
//       `https://mystylespot-backend.onrender.com/cart/${cartItemId}`
//     );

//     dispatch({
//       type: "REMOVE_FROM_CART",
//       payload: cartItemId,
//     });
//   } catch (error) {
//     console.error("Failed to remove from cart:", error);
//   }
// };

// export const updateQuantityAsync = (cartItemId, quantity) => async (dispatch) => {
//   try {
//     const res = await axios.put(
//       `https://mystylespot-backend.onrender.com/cart/${cartItemId}`,
//       { quantity }
//     );

//     const updatedItem = res.data;

//     dispatch({
//       type: "UPDATE_QUANTITY",
//       payload: { cartItemId: updatedItem._id, quantity: updatedItem.quantity },
//     });
//   } catch (error) {
//     console.error("Failed to update quantity:", error);
//   }
// };

// export default cartReducer;
