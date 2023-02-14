import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Header";
import Footer from "./Footer";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
