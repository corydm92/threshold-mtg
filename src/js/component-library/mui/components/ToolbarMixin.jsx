import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    toolbar: theme.mixins.toolbar
  }
});

// Gives spacing above the main body of our content, so AppBar does not cover our body
const ToolbarMixin = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.toolbar} />
      {props.children}
    </React.Fragment>
  )
}

export default ToolbarMixin;