import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      color: theme.palette.custom.darkGray,
    },
  };
});

const EnhancedCheckbox = (props) => {
  const useClasses = useStyles();
  const { checked, handleCheckboxChange, className, classes } = { ...props };

  return (
    <Checkbox
      className={className}
      classes={{ root: useClasses.root, ...classes }}
      checked={checked}
      onChange={handleCheckboxChange}
      name='checkbox'
      color='primary'
    />
  );
};

export default EnhancedCheckbox;
