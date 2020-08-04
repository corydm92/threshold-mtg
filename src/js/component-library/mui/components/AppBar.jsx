import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from './Container';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.primary.main,
      padding: '0px 8px',
    },
    menuButton: {
      marginRight: theme.spacing(1),
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
      <AppBar position='fixed' className={classes.root}>
        <Container>
          <Toolbar disableGutters={true}>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
            <Typography variant='h6' className={classes.title}>
              {title}
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
