import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
} from "./addUserTypes";

const initialstate = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case ADD_USER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
