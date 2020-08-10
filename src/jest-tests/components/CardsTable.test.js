import React from 'react';
import { shallow } from 'enzyme';
import CardsTable from '../../js/components/CardsTable';
import { fullState } from '../../js/constants/reduxStoreMock';

describe('CardsTable tests', () => {
  it('Renders the Component', () => {
    const props = {
      cards: fullState.cardsReducer.entities,
      isLoadingCards: fullState.isLoadingReducer.cards,
    };
    const component = shallow(<CardsTable {...props} />);

    const cardsTable = component.find("[data-test='cardsTable']");

    expect(cardsTable).toHaveLength(1); // Tests for existance
  });
});
