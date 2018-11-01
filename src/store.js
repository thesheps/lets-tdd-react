import { combineReducers, createStore } from "redux";
import selectCurrentProduct, { initialState } from "./reducers";

const reducers = combineReducers({
  selectCurrentProduct
});

export default createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);
