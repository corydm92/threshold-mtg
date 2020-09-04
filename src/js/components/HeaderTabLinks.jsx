import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EnhancedTabs from '../component-library/mui/components/Tabs';
import EnhancedTab from '../component-library/mui/components/Tab';
import RouteMapper from '../routes/RouteMapper';
import { getTabLinksPath } from '../../utils';

const HeaderTabLinks = () => {
  const location = useLocation();

  return (
    <EnhancedTabs initialValue={getTabLinksPath(location)}>
      <EnhancedTab
        label={RouteMapper.inventory.label}
        component={Link}
        to={RouteMapper.inventory.cards.path}
        dataTest='inventory-link'
      />
      <EnhancedTab
        label={RouteMapper.home.label}
        component={Link}
        to={RouteMapper.home.path}
        dataTest='home-link'
      />
    </EnhancedTabs>
  );
};

export default HeaderTabLinks;
