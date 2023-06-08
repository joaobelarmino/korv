import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import { AuthProvider } from "../../context/AuthProvider";
import { ThemeProvider } from 'styled-components';
import Routes from '../../Routes';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
            <AuthProvider>
                <Router>
                    <Routes />
                </Router>
            </AuthProvider>
        </Container>
    </ThemeProvider>
  )
}

export default App;
