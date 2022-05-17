import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
// import addUserReducer from './adduser/addUserReducer'

const rootReducer = combineReducers({
  user: userReducer,
  // adduser:addUserReducer,
});

export default rootReducer;
