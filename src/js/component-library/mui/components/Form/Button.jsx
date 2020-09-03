import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      color: (props) => (props.tertiary ? theme.palette.primary.main : ''),
      backgroundColor: (props) =>
        props.tertiary ? theme.palette.common.white : '',
      border: (props) =>
        props.tertiary ? `1px solid ${theme.palette.primary.main}` : '',
      '&:hover': {
        backgroundColor: (props) =>
          props.tertiary ? 'rgba(224, 224, 224, .7)' : '',
      },
    },
  };
});

const EnhancedButton = (props) => {
  const classes = useStyles(props);

  const {
    buttonText,
    color = 'primary',
    variant = 'contained',
    className,
    onClick,
  } = { ...props };
  return (
    <Button
      variant={variant}
      color={color}
      classes={classes}
      className={className}
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
};

export default EnhancedButton;
