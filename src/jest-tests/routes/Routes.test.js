import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import Routes from '../../js/routes/Routes';
import HomePageContainer from '../../js/containers/HomePageContainer';

describe('Home Page Test', () => {
  let wrapper;
  let pathMap = {};

  beforeEach(() => {
    wrapper = shallow(<Routes />);
    pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      console.log(pathMap);
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
    // console.log(pathMap);
  });
  it('Loads Home Page', () => {
    // console.log(pathMap['/']());
    expect(pathMap['/']).toBe(<HomePageContainer />);
  });
});
