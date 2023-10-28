import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Login } from "views/Login";
import { Home } from "views/Home";
import { Register } from "views/Register";
import { Locals } from "views/Locals";
import { Foruns } from "views/Foruns";

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
	{
		path: "/locals",
		element: <Locals />,
	},
	{
		path: "/foruns",
		element: <Foruns />,
	},
]);
