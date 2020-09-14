import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
}));

const EnhancedToolbar = (props) => {
  const classes = useStyles();

  const { className } = { ...props };

  return (
    <Toolbar className={className} classes={{ root: classes.root }}>
      {props.children}
    </Toolbar>
  );
};

export default EnhancedToolbar;
