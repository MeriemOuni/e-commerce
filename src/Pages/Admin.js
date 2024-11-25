import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Admin = () => {
	const admin = useSelector((state) => state.adminReducer.admin);
	console.log(admin);
	return (
		<div>
			<h1>This is Admin page</h1>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant='top' src='holder.js/100px180' />
				<Card.Body>
					<Card.Title>{admin && admin.name}</Card.Title>
					<Card.Text>{admin && admin.email}</Card.Text>
					<Button variant='primary'>Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Admin;
