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

const TabLinks = ({ location, ...props }) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(getCurrentPath(location));

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
        <Tab
          label={RouteMapper.inventory.label}
          component={Link}
          to={RouteMapper.inventory.cards.path}
          data-test='inventory-link'
        />
        <Tab
          label={RouteMapper.home.label}
          component={Link}
          to={RouteMapper.home.path}
          data-test='home-link'
        />
      </Tabs>
    </div>
  );
};

export default TabLinks;
