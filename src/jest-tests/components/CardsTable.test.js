import React from 'react';
import { mount } from 'enzyme';
import CardsTable from '../../js/components/CardsTable';
import { findByTestAttr } from '../../utils/testUtils';
import { fullState } from '../../js/constants/reduxStoreMock';
import { cardsSelector } from '../../selectors/cardsSelector';

describe('CardsTable tests', () => {
  let wrapper;

  describe('Without Data', () => {
    beforeEach(() => {
      const props = {
        cards: {},
        isLoadingCards: fullState.isLoadingReducer.cards,
      };

      wrapper = mount(<CardsTable {...props} />);
    });

    it('Renders the Component', () => {
      console.log(wrapper.debug());
      const cardsTable = findByTestAttr(wrapper, 'cardsTable');
      expect(cardsTable).toHaveLength(1);
    });
  });

  describe('With Data', () => {
    beforeEach(() => {
      const props = {
        cards: cardsSelector(fullState),
        isLoadingCards: true, // Force true to test isLoadingCardsFalse method
      };

      wrapper = mount(<CardsTable {...props} />);
    });

    it('Renders the Component', () => {
      const cardsTable = findByTestAttr(wrapper, 'cardsTable');
      expect(cardsTable).toHaveLength(1);
    });
  });
});
