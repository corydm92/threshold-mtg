import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from './Container';
import MuiMenuIcon from './MenuIcon';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.primary.main,
      padding: '0px 8px',
    },
    menuButton: {
      // marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  };
});

export default function ButtonAppBar(props) {
  const classes = useStyles();

  const { title } = props;

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.root} data-test='appbar'>
        <Container>
          <Toolbar disableGutters={true}>
            <Typography
              data-test='appbar-title'
              variant='h5'
              className={classes.title}
            >
              {title}
            </Typography>
            <MuiMenuIcon />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
