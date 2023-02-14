import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";
import Layout from "./components/Layout";
import Contact from "./components/Contact";

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<About />} />
				<Route path='/education' element={<Education />} />
				<Route path='/experience' element={<Experience />} />
				<Route path='/hobbies' element={<Hobbies />} />
			</Route>
		</Routes>
	);
};

export default MainRoutes;
