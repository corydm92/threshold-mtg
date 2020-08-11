import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    offset: theme.mixins.toolbar,
  };
});

// Gives spacing above the main body of our content, so AppBar does not cover our body
const ToolbarMixin = (props) => {
  const classes = useStyles();
  return (
    <div data-test='toolbarMixin'>
      <div className={classes.offset} />
      {props.children}
    </div>
  );
};

export default ToolbarMixin;
