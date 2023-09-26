import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Login } from "views/Login";
import { Home } from "views/Home";
import { Register } from "views/Register";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/home" />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);
