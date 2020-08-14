import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#52216E',
      dark: '#2F133F',
      light: '#692A8D',
      contrastText: '#fff',
    },
    text: { primary: '#fff' },
  },
  typography: {
    fontFamily: ['Raleway, sans-serif', 'Roboto, sans-serif'],
  },
});

export default theme;
