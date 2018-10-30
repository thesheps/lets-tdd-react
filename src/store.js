import { combineReducers, createStore } from "redux";
import setCurrentProduct from "./reducers";

const reducers = combineReducers({
  setCurrentProduct
});

export default createStore(reducers);
