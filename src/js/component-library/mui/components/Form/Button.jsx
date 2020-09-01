import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const EnhancedButton = (props) => {
  const {
    buttonText,
    color = 'primary',
    variant = 'contained',
    classes,
    className,
  } = { ...props };
  return (
    <Button
      variant={variant}
      color={color}
      classes={classes}
      className={className}
    >
      {buttonText}
    </Button>
  );
};

export default EnhancedButton;
