import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../JS/Actions/user";
import { loginAdmin } from "../JS/Actions/admin";

const Login = () => {
	const [user, setUser] = useState({});
	const [admin, setAdmin] = useState({});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
		setAdmin({ ...admin, [e.target.name]: e.target.value });
	};

	// const handleUser = (e) => {
	// 	e.preventDefault();

	// 	dispatch(login(user) && loginAdmin(admin));
	// 	navigate("/");
	// };

	return (
		<div>
			<h2>Login page</h2>
			<Form.Label>Email address</Form.Label>
			<Form.Control
				type='email'
				placeholder='Enter email'
				name='email'
				onChange={handleChange}
			/>
			<Form.Label>Password</Form.Label>
			<Form.Control
				type='text'
				placeholder='Enter password'
				name='password'
				onChange={handleChange}
			/>
			<Link to={"/"}>
				<Button
					variant='primary'
					type='submit'
					onClick={() => dispatch(login(user)) && dispatch(loginAdmin(admin))}>
					Submit
				</Button>
			</Link>
		</div>
	);
};

export default Login;
