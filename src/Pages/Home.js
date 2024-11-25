import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
	const admin = useSelector((state) => state.adminReducer.admin);
	return (
		<div>
			<h1> {admin.role}</h1>
		</div>
	);
};

export default Home;
