import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    minHeight: 0,
    height: '50px', // Overwriting minHeight and setting height here allows height customization
  },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedToolbar = (props) => {
  const classes = useToolbarStyles();
  return <Toolbar className={classes.root}>{props.children}</Toolbar>;
};

export default EnhancedToolbar;
