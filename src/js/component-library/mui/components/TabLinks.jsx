import React from 'react';
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

const TabLinks = () => {
  const classes = useStyles();
  // Set home to default (1)
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='mui tabs'
        classes={{ indicator: classes.indicator }}
      >
        <Tab
          label={RouteMapper.inventory.label}
          component={Link}
          to={RouteMapper.inventory.path}
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
