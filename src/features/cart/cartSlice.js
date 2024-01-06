import { createSlice } from '@reduxjs/toolkit';
// {
//   pizzaId: 16,
//   name: 'Pepperoni',
//   quantity: 3,
//   unitPrice: 8,
//   totalPrice: 24,
// },
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    // add
    addToCart(state, action) {
      // payload will be an object
      state.cartItems.push(action.payload);
    },
    // delete
    deleteFromCart(state, action) {
      // payload will be an id
      state.cartItems = state.cartItems.filter(
        (item) => item.pizzaId !== action.payload,
      );
    },
    // increase qty
    increaseCartItem(state, action) {
      // payload will be an id to find the matching object
      const targetItemObj = state.cartItems.find(
        (item) => item.pizzaId === action.payload,
      );
      targetItemObj.quantity++;
    },
    // decrease qty
    decreaseCartItem(state, action) {
      const targetItemObj = state.cartItems.find(
        (item) => item.pizzaId === action.payload,
      );
      targetItemObj.quantity--;
    },
    // clear at once
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseCartItem,
  decreaseCartItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// Getter functions
export const getTotalItem = (state) =>
  state.cart.cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  );
export const getTotalPrice = (state) =>
  state.cart.cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalPrice,
    0,
  );
