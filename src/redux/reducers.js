import { accountConstants } from "../constants/account";
import { combineReducers, createStore } from "redux";

function addUser(state = [], action) {
  if (action.type === accountConstants.LOGIN_USER) {
    return [...state, action.payload];
  } else {
    return state;
  }
}

const reducer = combineReducers({
  account: addUser
});

const store = createStore(reducer);
export default store;
