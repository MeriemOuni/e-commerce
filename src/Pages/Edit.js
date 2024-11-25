import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { editProduct, getProduct } from "../JS/Actions/products";

const Edit = () => {
	const dispatch = useDispatch();
	const [newProduct, setNewProduct] = useState({});
	const oneProduct = useSelector((state) => state.productReducer.oneProduct);
	const match = useMatch("/edit/:id");
	const navigate = useNavigate();
	const handleChange = (e) => {
		setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
	};
	useEffect(() => {
		dispatch(getProduct(match.params.id));
	});

	const handleEdit = () => {
		dispatch(editProduct(match.params.id, newProduct));
		navigate(-1);
	};

	return (
		<div>
			<Form.Label>Name</Form.Label>
			<Form.Control
				type='text'
				placeholder={`${oneProduct.name}`}
				name='name'
				value={newProduct.name}
				onChange={handleChange}
			/>
			<Form.Label>Description</Form.Label>
			<Form.Control
				type='text'
				placeholder={`${oneProduct.description}`}
				name='description'
				value={newProduct.description}
				onChange={handleChange}
			/>
			<Form.Label>Price</Form.Label>
			<Form.Control
				type='number'
				placeholder={`${oneProduct.price}`}
				name='price'
				value={newProduct.price}
				onChange={handleChange}
			/>
			<Form.Label>Stock</Form.Label>
			<Form.Control
				type='number'
				placeholder={`${oneProduct.stock}`}
				name='stock'
				value={newProduct.stock}
				onChange={handleChange}
			/>
			<Link to={"/products"}>
				<Button variant='primary' type='submit' onClick={handleEdit}>
					Submit
				</Button>
			</Link>
		</div>
	);
};

export default Edit;
