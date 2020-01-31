import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from './ThemeProvider';
import Home from './pages/Home';

const App = () => (
  <ThemeProvider>
    <Home />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));