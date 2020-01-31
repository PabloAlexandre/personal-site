import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from './assets/theme.json';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    overflow-x: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    { children }
  </ThemeProvider>
);

export default Theme;