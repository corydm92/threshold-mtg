import React from 'react';
import { shallow } from 'enzyme';
import SingleCardViewContainer from '../../js/containers/SingleCardViewContainer';
import { mockStore } from '../../utils/testUtils';
import { fullState } from '../test-mocks/reduxStoreMock';

describe('SingleCardViewContainer tests', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      store: mockStore(fullState),
    };

    wrapper = shallow(<SingleCardViewContainer {...props} />).dive(); // Dive to access the container component, not the provider
  });

  it('Renders the Component', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Checks mapStateToProps', () => {
    expect(wrapper.props().cards).not.toBeNull();
    expect(wrapper.props().isLoadingCard).not.toBeNull();
  });

  it('Checks mapDispatchToProps', () => {
    expect(wrapper.props().fetchSingleCard()).not.toBeNull();
    expect(wrapper.props().isLoadingCardFalse()).not.toBeNull();
  });
});
