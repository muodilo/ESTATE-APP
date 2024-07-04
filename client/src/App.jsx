import {useState} from 'react'
import Navbar from "./components/navBar/Navbar";
import SidebarMenu from "./components/sidebarMenu/SidebarMenu";
import HomePage from './routes/homePage/HomePage';
import ListPage from './routes/listPage/ListPage';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";
import Layout from './layout/Layout';

export default function App() {

	
	const router = createBrowserRouter([
  {
    path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element:<HomePage/>
			},
				{
					path: "/list",
					element:<ListPage/>
			},
			]
  },
]);
  return (

		<RouterProvider router={router} />
	);
}