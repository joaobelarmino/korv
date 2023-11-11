import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProtectedLayout from "./components/ProtectedLayout";
import { ContainerRoot, Wrapper } from "./components/Layout/styles";

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path='/login' element={<Login />}/>
			<Route
				path='/'
				element={
					<ProtectedLayout>
						<ContainerRoot>
							<Wrapper>
								<Home />
							</Wrapper>
							<Footer />
						</ContainerRoot>
					</ProtectedLayout>
				}
			/>
			<Route
				path='/regioes'
				element={
					<ProtectedLayout adminOnly>
						{/* TODO: Implement regions page */}
						<></>
					</ProtectedLayout>
				}
			/>
			<Route
				path="/not-found"
				element={
					<ContainerRoot>
						{/* TODO: Implement not found page */}
						<h1>Página não encontrada</h1>
						<Footer />
					</ContainerRoot>
				}
			/>
		</Switch>
	);
};

export default Routes;
