import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../JS/Actions/user";

const NavBar = () => {
	const isAuth = useSelector((state) => state.userReducer.isAuth);
	const admin = useSelector((state) => state.adminReducer.admin);
	const dispatch = useDispatch();
	return (
		<header>
			<Navbar bg='primary' variant='dark'>
				<Container>
					<Navbar.Brand href='/'>e-commerce</Navbar.Brand>
					<Nav className='mx-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/products'>Product</Nav.Link>
						<Nav.Link href='/add'>Add Product</Nav.Link>
						{isAuth ? <Nav.Link href='/profile'>Profile</Nav.Link> : null}
					</Nav>
					{admin && admin.role === "admin" ? (
						<Nav.Link href='/admin'>Admin</Nav.Link>
					) : null}

					{(admin && admin.role === "admin") || isAuth ? (
						<Link to='/'>
							<button className='logout' onClick={() => dispatch(logout())}>
								Logout
							</button>
						</Link>
					) : (
						<div className='login'>
							<Link to='/login'>
								<button>Login</button>
							</Link>
							<Link to='/register'>
								<button>Register</button>
							</Link>
						</div>
					)}
				</Container>
			</Navbar>
		</header>
	);
};

export default NavBar;
