import {
	CURRENT_ADMIN,
	// CURRENT_ADMIN,
	FAIL_ADMIN,
	LOAD_ADMIN,
	LOGOUT_ADMIN,
	SUCC_ADMIN,
} from "../ActionTypes/admin";

// initState
const initState = {
	admin: {},
	loadAdmin: false,
	errors: [],
	isAdmin: false,
};

// pure function
const adminReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case LOAD_ADMIN:
			return { ...state, loadAdmin: true };
		case SUCC_ADMIN:
			localStorage.setItem("token", payload.token);
			return {
				...state,
				loadAdmin: false,
				admin: payload.admin,
				isAdmin: true,
			};
		case LOGOUT_ADMIN:
			localStorage.removeItem("token");
			return {
				admin: {},
				loadAdmin: false,
				errors: [],
				isAdmin: false,
			};
		case FAIL_ADMIN:
			return { ...state, loadAdmin: false, errors: payload };
		case CURRENT_ADMIN:
			return { ...state, loadAdmin: false, admin: payload, isAdmin: true };
		default:
			return state;
	}
};

export default adminReducer;
