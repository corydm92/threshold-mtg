import React from 'react';
import { shallow } from 'enzyme';
import CardsTableContainer from '../../js/containers/CardsTableContainer';
import configureStore from 'redux-mock-store';
import { fullState } from '../../js/constants/reduxStoreMock';

const configureMockStore = configureStore();

const store = configureMockStore(fullState);

describe('HomePageContainer tests', () => {
  it('Renders the Component', () => {
    const component = shallow(
      <CardsTableContainer store={store} isLoadingCards={false} />
    );

    // console.log(component.props('cards'));

    expect(component).toBeTruthy(); // Tests for existance
    // expect(component.prop('isLoadingCards')).toEqual(false);
  });
});
