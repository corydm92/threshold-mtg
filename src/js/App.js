import React from 'react';
import MainViewContainer from './containers/MainViewContainer';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './component-library/mui/mui-theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainViewContainer />
    </ThemeProvider>
  );
}

export default App;
