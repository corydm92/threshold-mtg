import React from 'react';
import { Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      // backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
      // down() works as a "greater than"
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    indicator: {
      backgroundColor: theme.palette.text.secondary,
    },
  };
});

const EnhancedTabs = (props) => {
  const { initialValue } = { ...props };
  const classes = useStyles();

  const [value, setValue] = React.useState(initialValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} data-test='tab-links'>
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
