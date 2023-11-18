import { RouterProvider } from "react-router-dom";
import { router } from "./routes";


var user : string;

export function App() {
	return <RouterProvider router={router} />;
}

export function setUser(data: string){
	user = data;
}

export function getUser(){
	return user;
}
