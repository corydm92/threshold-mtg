import React from 'react';
import { shallow } from 'enzyme';
import SingleCardView from '../../js/components/SingleCardView';
import { fullState } from '../../js/constants/reduxStoreMock';

describe('SingleCardView tests', () => {
  it('Renders the Component', () => {
    const props = {
      cards: fullState.cardsReducer.entities,
      isLoadingCards: fullState.isLoadingReducer.cards,
    };
    const component = shallow(<SingleCardView {...props} />);

    const singleCardView = component.find("[data-testid='singleCardView']");

    expect(singleCardView).toHaveLength(1); // Tests for existance
  });
});
