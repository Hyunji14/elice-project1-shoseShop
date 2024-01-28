import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    letter-spacing: -2%;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
