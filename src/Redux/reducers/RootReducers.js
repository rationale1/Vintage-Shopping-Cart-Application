import { combineReducers } from "redux";
import shoppingReducer from "./shoppingReducer";

const rooterReducers = combineReducers({
  shop: shoppingReducer,
});

export default rooterReducers;
