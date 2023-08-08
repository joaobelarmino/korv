import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedLayout from "./components/ProtectedLayout";
import Footer from "./components/Footer";

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path='/login' element={<Login />}/>
			<Route
				path='/'
				element={
					<ProtectedLayout>
						<Home />
						<Footer />
					</ProtectedLayout>
				}
			/>
		</Switch>
	);
};

export default Routes;
