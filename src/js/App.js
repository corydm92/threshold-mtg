import React from 'react';
import MainViewContainer from './containers/MainViewContainer';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './component-library/mui/mui-theme';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainViewContainer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
