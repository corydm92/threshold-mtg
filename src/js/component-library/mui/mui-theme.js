import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: 'rgba(82, 33, 110, 1)',
      dark: '#2F133F',
      light: 'rgba(127, 24, 127, 1)',
      contrastText: '#fff',
    },
    custom: {
      darkGray: 'rgba(125, 124, 122, 1)',
      lightGray: 'rgba(224, 224,224, 1)',
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
    fontSize: 14,
    fontFamily: ['Raleway, sans-serif', 'Roboto, sans-serif'],
  },
});

export default theme;
