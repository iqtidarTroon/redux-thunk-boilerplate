import axios from "axios";
import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
} from "./addUserTypes";

export const addUserRequest = (newuser) => {
  console.log("new user", newuser);
  return {
    type: ADD_USER_REQUEST,
    payload: newuser,
  };
};

export const addUserSuccess = (user) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: user,
  };
};

export const addUserFailure = (error) => {
  return {
    type: ADD_USER_FAILURE,
    payload: error,
  };
};

export const adduser = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(addUserRequest);
        const adduser = response.data;
        dispatch(addUserSuccess(adduser));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(addUserFailure(errorMsg));
      });
  };
};
