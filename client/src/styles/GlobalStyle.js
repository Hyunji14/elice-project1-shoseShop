import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    letter-spacing: -2%;
    letter-spacing: -0.3px;
  }

  button{
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  input {
    border: none;
  }

  input:focus {
  outline: none;
}

  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


`;

export default GlobalStyle;
