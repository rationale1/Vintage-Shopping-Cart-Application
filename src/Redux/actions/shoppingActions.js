import {
  ADD_TO_CART,
  DELETE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  TOTAL_ITEMS,
  CLOSE_BANNER,
} from "../constants/shoppingType";

// Add to Cart
export const addToCart = id => ({
  type: ADD_TO_CART,
  payload: id,
});

// Delete form Cart
export const removeFromCart = id => ({
  type: DELETE_ITEM,
  payload: id,
});

// Increase quantity
export const increaseItem = id => ({
  type: INCREASE_ITEM,
  payload: id,
});

// Decrease quantity
export const decreaseItem = id => ({
  type: DECREASE_ITEM,
  payload: id,
});

// Get Total Price
export const totalPrice = () => ({
  type: TOTAL_ITEMS,
});

// Close Banner
export const bannerClose = () => ({
  type: CLOSE_BANNER,
});
