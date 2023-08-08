import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import { AuthProvider } from "../../context/AuthProvider";
import { ThemeProvider } from "styled-components";
import Routes from "../../Routes";

import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";
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
			<AuthProvider>
				<Router>
					<Routes />
				</Router>
			</AuthProvider>
		</ThemeProvider>
	);
};

export default App;
