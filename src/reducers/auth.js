import { LOGIN } from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        signedIn: action.payload
      };
    default:
      return state;
  }
};
