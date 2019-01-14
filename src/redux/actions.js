import { accountConstants } from "../constants/account";

export const actions = {
  loginUser
};

function loginUser(username) {
  return {
    type: accountConstants.LOGIN_USER,
    payload: {
      isLoggedIn: true,
      username: username
    }
  };
}
