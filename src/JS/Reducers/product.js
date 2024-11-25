// import

import {
	FAIL_PRODUCTS,
	GET_PRODUCT,
	GET_PRODUCTS,
	LOAD_PRODUCTS,
} from "../ActionTypes/Products";

// initState
const initState = {
	listProducts: [],
	error: null,
	load: false,
	oneProduct: {},
};

// purefunction
const productReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case LOAD_PRODUCTS:
			return { ...state, load: true };
		case GET_PRODUCTS:
			return { ...state, load: false, listProducts: payload.listProducts };
		case GET_PRODUCT:
			return { ...state, oneProduct: payload.oneProduct, load: false };
		case FAIL_PRODUCTS:
			return { ...state, load: false, error: payload };
		default:
			return state;
	}
};

export default productReducer;
