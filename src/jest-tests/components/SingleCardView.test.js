import React from 'react';
import { shallow } from 'enzyme';
import SingleCardView from '../../js/components/SingleCardView';
import { fullState } from '../../js/constants/reduxStoreMock';
import { cardSelector } from '../../selectors/cardSelector';

describe('SingleCardView tests', () => {
  it('Renders the Component', () => {
    const props = {
      card: cardSelector(fullState),
      isLoadingCard: fullState.isLoadingReducer.card,
      match: { params: { id: '1679' } }, // Brittle test, because we are mocking it does not break the action if we pass in a non valid ID
    };
    const component = shallow(<SingleCardView {...props} />);

    const singleCardView = component.find("[data-testid='singleCardView']");

    expect(singleCardView).toHaveLength(1); // Tests for existance
  });
});
