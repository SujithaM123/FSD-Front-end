/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import HomePage from "./components/HomePage";
import "./index.css";
import Viewemployees from "./components/Viewemployees";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/add-employee'
					element={<EmployeeForm />}
				/>
				<Route
					path='/view'
					element={<Viewemployees />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
