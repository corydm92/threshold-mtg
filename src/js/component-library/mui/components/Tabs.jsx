import React from 'react';
import { Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {},
    indicator: {
      backgroundColor: theme.palette.text.secondary,
    },
  };
});

const EnhancedTabs = (props) => {
  const { initialValue, className } = { ...props };
  const classes = useStyles();

  const [value, setValue] = React.useState(initialValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={className}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='mui tabs'
        classes={{ indicator: classes.indicator }}
        data-test='tabs-wrapper'
      >
        {props.children}
      </Tabs>
    </div>
  );
};

export default EnhancedTabs;
