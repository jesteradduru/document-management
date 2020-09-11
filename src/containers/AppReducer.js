import {
  REGISTER_USER,
  REGISTER_USER_FAILED,
  LOGIN_USER,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
} from "./AppConstants";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const initialState = {
  isSignedIn: cookies.get("isSignedIn"),
  username: cookies.get("username"),
  type: cookies.get("type"),
  errorMessage: "",
};

export const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_USER:
      return Object.assign({}, state, {
        username: action.payload.username,
        type: action.payload.type,
        isSignedIn: "true",
      });
    case REGISTER_USER_FAILED:
      return Object.assign({}, state, {
        isSignedIn: "false",
        errorMessage: "Make sure to fill up all fields correctly",
      });
    case LOGIN_USER:
      return Object.assign({}, state, {
        username: action.payload.username,
        type: action.payload.type,
        isSignedIn: "true",
      });
    case LOGIN_USER_FAILED:
      return Object.assign({}, state, {
        isSignedIn: "false",
        errorMessage: action.payload,
      });
    case LOGOUT_USER:
      cookies.set("isSignedIn", "false");
      cookies.set("type", "user");
      cookies.set("username", "");
      return Object.assign({}, state, {
        isSignedIn: cookies.get("isSignedIn"),
        username: cookies.get("username"),
        type: cookies.get("type"),
      });
    default:
      return state;
  }
};
