import React from 'react';
import { shallow } from 'enzyme';
import CardsTableContainer from '../../js/containers/CardsTableContainer';
import { mockStore } from '../../utils/testUtils';
import { fullState } from '../../js/constants/reduxStoreMock';

describe('HomePageContainer tests', () => {
  const fetchCards = jest.fn();
  let wrapper;

  beforeEach(() => {
    const props = {
      store: mockStore(fullState),
      fetchCards,
    };

    wrapper = shallow(<CardsTableContainer {...props} />).dive(); // Dive to access the container component, not the provider
  });

  it('Renders the Component', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Checks mapStateToProps', () => {
    expect(wrapper.props().cards).not.toBeNull();
    expect(wrapper.props().isLoadingCards).not.toBeNull();
  });

  it('Checks mapDispatchToProps', () => {
    expect(wrapper.props().fetchCards()).not.toBeNull();
    expect(wrapper.props().isLoadingCardsFalse()).not.toBeNull();
  });
});
