import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import { ContainerRoot, Wrapper } from "./components/Layout/styles";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Footer from "./components/Footer";
import ProtectedLayout from "./components/ProtectedLayout";
import Regions from "./pages/Regions";
import { RegionFilterProvider } from "./context/RegionsFilterProvider";

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
				path='/users'
				element={
					<ProtectedLayout adminOnly>
						<ContainerRoot>
							<Wrapper>
								<Users />
							</Wrapper>
							<Footer />
						</ContainerRoot>
					</ProtectedLayout>
				}
			/>
			<Route
				path='/regions'
				element={
					<ProtectedLayout adminOnly>
						<ContainerRoot>
							<Wrapper>
								<RegionFilterProvider>
									<Regions />
								</RegionFilterProvider>
							</Wrapper>
							<Footer />
						</ContainerRoot>
					</ProtectedLayout>
				}
			/>
			<Route
				path="*"
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
