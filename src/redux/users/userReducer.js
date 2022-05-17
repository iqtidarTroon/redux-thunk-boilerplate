import {
  FATCH_USER_REQUEST,
  FATCH_USER_SUCCESS,
  FATCH_USER_FAILURE,
} from "./userTypes";

const initialstate = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case FATCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FATCH_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FATCH_USER_FAILURE:
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
