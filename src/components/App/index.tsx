import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import { AuthProvider } from "../../context/AuthProvider";
import { ThemeProvider } from "styled-components";
import Routes from "../../Routes";

import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";
import { Container } from "./styles";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Toaster
				position="top-right"
				gutter={16}
				toastOptions={{
					duration: 4500
				}}
			/>
			<GlobalStyles />
			<Container>
				<AuthProvider>
					<Router>
						<Routes />
					</Router>
				</AuthProvider>
			</Container>
		</ThemeProvider>
	);
};

export default App;
