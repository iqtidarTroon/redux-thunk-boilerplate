import { legacy_createStore, applyMiddleware } from "redux";
import userReducer from "./users/userReducer";
import rootReducer from "./rootReducer";
import addUserReducer from "./adduser/addUserReducer";
import thunk from "redux-thunk";

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
