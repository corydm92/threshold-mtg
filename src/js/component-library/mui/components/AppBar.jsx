import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Container from './Container';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.primary.main,
      padding: '0px 8px',
    },
  };
});

const MuiAppBar = (props) => {
  const classes = useStyles();

  const { className, dataTest } = { ...props };

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={className} data-test={dataTest}>
        <Container>
          <Toolbar disableGutters={true}>{props.children}</Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default MuiAppBar;
