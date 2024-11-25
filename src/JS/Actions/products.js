import axios from "axios";
import {
	FAIL_PRODUCTS,
	GET_PRODUCT,
	GET_PRODUCTS,
	LOAD_PRODUCTS,
} from "../ActionTypes/Products";

// get all products
export const getProducts = () => async (dispatch) => {
	dispatch({ type: LOAD_PRODUCTS });
	try {
		let result = await axios.get("/api/product/getAll");
		dispatch({ type: GET_PRODUCTS, payload: result.data });
	} catch (error) {
		dispatch({ type: FAIL_PRODUCTS, payload: error.response });
	}
};

// add product
export const addProduct = (newProduct) => async (dispatch) => {
	try {
		const config = {
			headers: {
				authorization: localStorage.getItem("token"),
			},
		};
		// console.log(newProduct);
		await axios.post("/api/product/add", newProduct, config);
		dispatch(getProducts());
	} catch (error) {
		dispatch({ type: FAIL_PRODUCTS, payload: error.response });
	}
};

// deletet product
export const deleteProduct = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/product/${id}`);
		dispatch(getProducts());
	} catch (error) {
		dispatch({ type: FAIL_PRODUCTS, payload: error.response });
	}
};

// edit product
export const editProduct = (id, newProduct) => async (dispatch) => {
	try {
		await axios.put(`/api/product/${id}`, newProduct);
		dispatch(getProducts());
	} catch (error) {
		dispatch({ type: FAIL_PRODUCTS, payload: error.response });
	}
};

// get one product
export const getProduct = (id) => async (dispatch) => {
	dispatch({ type: LOAD_PRODUCTS });
	try {
		let result = await axios.get(`/api/product/${id}`);
		dispatch({ type: GET_PRODUCT, payload: result.data });
	} catch (error) {
		dispatch({ type: FAIL_PRODUCTS, payload: error.response });
	}
};
