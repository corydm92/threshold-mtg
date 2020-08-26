import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../../utils/testUtils';
import SingleCardView from '../../js/components/SingleCardView';
import { fullState } from '../../js/constants/test-mocks/reduxStoreMock';
import { cardSelector } from '../../selectors/cardSelector';

describe('SingleCardView tests', () => {
  let wrapper;
  const fetchSingleCard = jest.fn();

  beforeEach(() => {
    const props = {
      fetchSingleCard,
      card: cardSelector(fullState),
      isLoadingCard: fullState.isLoadingReducer.card,
      match: { params: { id: '1679' } }, // Brittle test, because we are mocking it does not break the action if we pass in a non valid ID
    };
    wrapper = mount(<SingleCardView {...props} />);
  });

  it('Renders the Component', () => {
    const singleCardView = findByTestAttr(wrapper, 'singleCardView');
    expect(singleCardView).toHaveLength(1); // Tests for existance
  });

  it('Calls fetchSingleCard on Mount', () => {
    expect(fetchSingleCard).toHaveBeenCalled();
  });
});
