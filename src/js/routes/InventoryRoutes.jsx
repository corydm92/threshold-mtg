import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteMapper from './RouteMapper';
import CardsTableContainer from '../containers/CardsTableContainer';
import SingleCardViewContainer from '../containers/SingleCardViewContainer';

const InventoryRoutes = (props) => {
  return (
    <Switch>
      <Route
        exact
        path={RouteMapper.inventory.cards.path}
        component={(routeProps) => <CardsTableContainer {...routeProps} />}
      />

      <Route
        exact
        path={RouteMapper.inventory.card.path}
        component={(routeProps) => <SingleCardViewContainer {...routeProps} />}
      />
    </Switch>
  );
};

export default InventoryRoutes;
