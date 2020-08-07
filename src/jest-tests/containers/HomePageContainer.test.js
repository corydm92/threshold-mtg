import React from 'react';
import { shallow } from 'enzyme';
import HomePageContainer from '../../js/containers/HomePageContainer';
import configureStore from 'redux-mock-store';
import { fullState } from '../../js/constants/reduxStoreMock';

const configureMockStore = configureStore();

const store = configureMockStore(fullState);

describe('HomePageContainer tests', () => {
  it('Renders the Component', () => {
    const component = shallow(<HomePageContainer store={store} />).dive();

    expect(component).toBeTruthy(); // Tests for existance
  });
});
