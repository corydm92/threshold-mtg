import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {},
    typography: {
      lineHeight: 1,
      fontSize: (props) =>
        props.largeText
          ? theme.typography.htmlFontSize
          : theme.typography.fontSize,
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
  const { className } = { ...props };
  return (
    <Typography className={className} classes={{ root: classes.typography }}>
      {props.children}
    </Typography>
  );
};

export default EnhancedTypography;
