import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Jost', sans-serif;
  }

  :root {
	font-size: 16px;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white.default};
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
