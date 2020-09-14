import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      '& .MuiTypography-root': {
        color: theme.palette.text.primary,
      },
    },
  };
});

const EnhancedInputAdornment = (props) => {
  const classes = useStyles();

  const { className, start, dataTest } = { ...props };

  return (
    <InputAdornment
      className={className}
      classes={{ root: classes.root }}
      start={start}
      data-test={dataTest}
    >
      {props.children}
    </InputAdornment>
  );
};

export default EnhancedInputAdornment;
