import { combineReducers, createStore } from "redux";
import selectCurrentProduct, { initialState } from "./reducers";

const reducers = combineReducers({
  selectCurrentProduct
});

export default createStore(reducers, initialState);
