import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ element: Component, ...rest }) => {
	const token = localStorage.getItem("token");
	const admin = useSelector((state) => state.adminReducer);
	console.log(admin);
	console.log(token);
	// If the token exists and the user is an admin, render the component
	if (token && admin?.role === "admin") {
		return <Route {...rest} element={Component} />;
	}

	// Otherwise, redirect to the dashboard or another route
	return <Navigate to='/login' replace />;
};

export default AdminRoute;
