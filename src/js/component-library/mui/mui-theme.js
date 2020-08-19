import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(82, 33, 110, 1)',
      dark: '#2F133F',
      light: 'rgba(82, 33, 110, .8)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgba(77, 170, 87, 1)',
    },
    text: { primary: '#000', secondary: '#fff' },
    action: {
      hover: 'rgba(82, 33, 110, .08)',
    },
  },
  typography: {
    fontFamily: ['Raleway, sans-serif', 'Roboto, sans-serif'],
  },
});

export default theme;
