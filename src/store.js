import { combineReducers, createStore } from "redux";
import selectCurrentProduct from "./reducers";

const reducers = combineReducers({
  selectCurrentProduct
});

export default createStore(reducers);
