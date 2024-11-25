import axios from "axios";
import {
	CURRENT_ADMIN,
	FAIL_ADMIN,
	LOAD_ADMIN,
	LOGOUT_ADMIN,
	SUCC_ADMIN,
} from "../ActionTypes/admin";

// export const registerAdmin = (newAdmin) => async (dispatch) => {
// 	dispatch({ type: LOAD_ADMIN });
// 	try {
// 		let result = await axios.post("/api/admin/register", newAdmin);
// 		dispatch({ type: SUCC_ADMIN, payload: result.data });
// 	} catch (error) {
// 		dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
// 	}
// };

export const loginAdmin = (admin) => async (dispatch) => {
	dispatch({ type: LOAD_ADMIN });
	try {
		let result = await axios.post("/api/admin/login", admin);
		dispatch({ type: SUCC_ADMIN, payload: result.data });
		// console.log(admin);
	} catch (error) {
		dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
	}
};

export const currentAdmin = () => async (dispatch) => {
	dispatch({ type: LOAD_ADMIN });
	try {
		const config = {
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		};
		let result = await axios.get("/api/admin/current", config);
		dispatch({ type: CURRENT_ADMIN, payload: result.data });
		// console.log(result);
	} catch (error) {
		console.log(error);
	}
};

export const logoutAdmin = () => async (dispatch) => {
	dispatch({ type: LOGOUT_ADMIN });
};
