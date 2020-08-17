import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteMapper from './RouteMapper';
import HomePageContainer from '../containers/HomePageContainer';
import InventoryContainer from '../containers/InventoryContainer';

const Routes = (props) => {
  return (
    <Switch>
      <Route
        exact
        path={RouteMapper.home.path}
        component={(routeProps) => <HomePageContainer {...routeProps} />}
      />

      <Route
        path={RouteMapper.inventory.path}
        component={(routeProps) => <InventoryContainer {...routeProps} />}
      />
    </Switch>
  );
};

export default Routes;
