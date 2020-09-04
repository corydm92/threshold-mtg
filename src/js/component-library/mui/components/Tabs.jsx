import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RouteMapper from '../../../routes/RouteMapper';
import { Link } from 'react-router-dom';

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

export const getCurrentPath = (location) => {
  const pathMap = {
    inventory: {
      path: '/inventory',
      value: 0,
    },
    home: {
      path: '/',
      value: 1,
    },
  };

  if (location.pathname.startsWith('/inventory')) {
    return pathMap.inventory.value;
  } else {
    return pathMap.home.value;
  }
};

const EnhancedTabs = (props) => {
  const { initialValue, onChange, value } = { ...props };
  const classes = useStyles();

  return (
    <div className={classes.root} data-test='tab-links'>
      <Tabs
        value={value}
        onChange={onChange}
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
