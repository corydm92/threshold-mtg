import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {},
    typography: {
      fontSize: (props) => (props.largeText ? '16px' : '14px'),
      fontWeight: (props) =>
        props.bold
          ? theme.typography.fontWeightBold
          : theme.typography.fontWeightRegular,
      display: 'flex',
      alignItems: 'center',
    },
  };
});

const EnhancedTypography = (props) => {
  const classes = useStyles(props);
  return (
    <Typography className={classes.typography}>{props.children}</Typography>
  );
};

export default EnhancedTypography;
