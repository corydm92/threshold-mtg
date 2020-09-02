import React from 'react';
import Button from '@material-ui/core/Button';

const EnhancedButton = (props) => {
  const {
    buttonText,
    color = 'primary',
    variant = 'contained',
    classes,
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
