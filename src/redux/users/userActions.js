import axios from "axios";
import {
  FATCH_USER_REQUEST,
  FATCH_USER_SUCCESS,
  FATCH_USER_FAILURE,
} from "./userTypes";

export const fatchUserRequest = () => {
  return {
    type: FATCH_USER_REQUEST,
  };
};

export const fatchUserSuccess = (user) => {
  return {
    type: FATCH_USER_SUCCESS,
    payload: user,
  };
};

export const fatchUserFailure = (error) => {
  return {
    type: FATCH_USER_FAILURE,
    payload: error,
  };
};

export const fatchuser = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fatchUserRequest);
        const user = response.data;
        dispatch(fatchUserSuccess(user));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fatchUserFailure(errorMsg));
      });
  };
};
