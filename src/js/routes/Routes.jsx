import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RouteMapper from './RouteMapper';
import CardsTableContainer from '../containers/CardsTableContainer';

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={RouteMapper.cards.path}
          component={(routeProps) => <CardsTableContainer {...routeProps} />}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
