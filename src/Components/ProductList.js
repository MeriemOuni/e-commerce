import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../JS/Actions/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
	const dispatch = useDispatch();
	const listProducts = useSelector(
		(state) => state.productReducer.listProducts
	);
	const load = useSelector((state) => state.productReducer.load);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<div
			style={{
				display: "flex",
				margin: "2% 10%",
				justifyContent: "space-around",
			}}>
			{load ? (
				<h2>Loadinnnnnnggg ....</h2>
			) : (
				listProducts.map((el) => <ProductCard product={el} key={el._id} />)
			)}
		</div>
	);
};

export default ProductList;
