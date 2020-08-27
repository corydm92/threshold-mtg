import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(82, 33, 110, 1)',
      dark: '#2F133F',
      light: 'rgba(127, 24, 127, 1)',
      contrastText: '#fff',
    },
    custom: {
      darkGray: 'rgba(125, 124, 122, 1)',
      green: 'rgba(77, 139, 49, 1)',
      red: 'rgba(219, 34, 42, 1)',
      gold: 'rgba(243, 201, 105, 1)',
      blue: 'rgba(86, 142, 163, 1)',
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
    htmlFontSize: 16,
    fontFamily: ['Raleway, sans-serif', 'Roboto, sans-serif'],
  },
});

export default theme;
