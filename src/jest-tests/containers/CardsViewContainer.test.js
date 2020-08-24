import React from 'react';
import { shallow } from 'enzyme';
import CardsViewContainer from '../../js/containers/CardsViewContainer';
import { mockStore } from '../../utils/testUtils';
import { fullState } from '../../js/constants/reduxStoreMock';

describe('CardsViewContainer tests', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      store: mockStore(fullState),
    };

    wrapper = shallow(<CardsViewContainer {...props} />).dive(); // Dive to access the container component, not the provider
  });

  it('Renders the Component', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Checks mapStateToProps', () => {
    expect(wrapper.props().cards).not.toBeNull();
    expect(wrapper.props().isLoadingCards).not.toBeNull();
  });

  it('Checks mapDispatchToProps', () => {
    expect(wrapper.props().isLoadingCardsFalse()).not.toBeNull();
  });
});
