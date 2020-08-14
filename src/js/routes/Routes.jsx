import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteMapper from './RouteMapper';
import HomePageContainer from '../containers/HomePageContainer';
import CardsTableContainer from '../containers/CardsTableContainer';
import SingleCardViewContainer from '../containers/SingleCardViewContainer';

const Routes = (props) => {
  return (
    <Switch>
      <Route
        exact
        path={RouteMapper.home.path}
        component={(routeProps) => <HomePageContainer {...routeProps} />}
      />

      <Route
        exact
        path={RouteMapper.cards.path}
        component={(routeProps) => <CardsTableContainer {...routeProps} />}
      />

      <Route
        exact
        path={RouteMapper.card.path}
        component={(routeProps) => <SingleCardViewContainer {...routeProps} />}
      />
    </Switch>
  );
};

export default Routes;
