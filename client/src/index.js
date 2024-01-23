import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import GlobalStyle from "./global/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CookiesProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </CookiesProvider>
);
