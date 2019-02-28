import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};
export const store = createStore(reducer, persistedState, applyMiddleware());

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
