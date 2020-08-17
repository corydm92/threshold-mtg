import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteMapper from './RouteMapper';
import CardsViewContainer from '../containers/CardsViewContainer';
import SingleCardViewContainer from '../containers/SingleCardViewContainer';

const InventoryRoutes = (props) => {
  return (
    <Switch>
      <Route
        exact
        path={RouteMapper.inventory.cards.path}
        component={(routeProps) => <CardsViewContainer {...routeProps} />}
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
