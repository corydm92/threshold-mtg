import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EnhancedTabs from '../component-library/mui/components/Tabs';
import EnhancedTab from '../component-library/mui/components/Tab';
import RouteMapper from '../routes/RouteMapper';
import { getTabLinksPath } from '../../utils';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      color: theme.palette.text.secondary,
    },
  };
});

const HeaderTabLinks = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <EnhancedTabs initialValue={getTabLinksPath(location)}>
      <EnhancedTab
        className={classes.root}
        label={RouteMapper.inventory.label}
        component={Link}
        to={RouteMapper.inventory.cards.path}
        dataTest='inventory-link'
      />
      <EnhancedTab
        className={classes.root}
        label={RouteMapper.home.label}
        component={Link}
        to={RouteMapper.home.path}
        dataTest='home-link'
      />
    </EnhancedTabs>
  );
};

export default HeaderTabLinks;
