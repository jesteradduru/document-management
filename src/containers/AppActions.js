import {
  REGISTER_USER,
  REGISTER_USER_FAILED,
  LOGIN_USER,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
} from "./AppConstants";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";
const cookies = new Cookies();

export const RegisterUser = (user = {}) => (dispatch) => {
  fetch("http://localhost:5000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.username) {
        dispatch({ type: REGISTER_USER, payload: user });
        cookies.set("username", data.username);
        cookies.set("type", data.type);
        cookies.set("isSignedIn", true);
      } else {
        dispatch({ type: REGISTER_USER_FAILED });
      }
    })
    .catch(dispatch({ type: REGISTER_USER_FAILED }));
};

export const LoginUser = (user) => (dispatch) => {
  fetch("http://localhost:5000/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.username) {
        dispatch({ type: LOGIN_USER, payload: data });
        cookies.set("username", data.username);
        cookies.set("type", data.type);
        cookies.set("isSignedIn", true);
      } else {
        dispatch({ type: LOGIN_USER_FAILED, payload: "Invalid Credentials" });
      }
    })
    .catch((err) => dispatch({ type: LOGIN_USER_FAILED, payload: err }));
};

export const LogoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
