import React, { useEffect } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RouteMapper from '../../../routes/RouteMapper';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
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
    backgroundColor: theme.palette.indicator.main,
  },
}));

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

const TabLinks = ({ location, ...props }) => {
  const classes = useStyles();

  const getCurrentPath = () => {
    if (location.pathname.startsWith('/inventory')) {
      return pathMap.inventory.value;
    } else {
      return pathMap.home.value;
    }
  };

  const [value, setValue] = React.useState(getCurrentPath);

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
      >
        <Tab
          label={RouteMapper.inventory.label}
          component={Link}
          to={RouteMapper.inventory.cards.path}
        />
        <Tab
          label={RouteMapper.home.label}
          component={Link}
          to={RouteMapper.home.path}
        />
      </Tabs>
    </div>
  );
};

export default TabLinks;
