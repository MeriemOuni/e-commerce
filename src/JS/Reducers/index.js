import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from "./product";
import adminReducer from "./admin";

const rootReducer = combineReducers({
	userReducer,
	productReducer,
	adminReducer,
});

export default rootReducer;
