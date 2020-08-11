import React from 'react';
import { mount } from 'enzyme';
import CardsTable from '../../js/components/CardsTable';
import { findByTestAttr } from '../../utils/testUtils';
import { fullState } from '../../js/constants/reduxStoreMock';
import { cardsSelector } from '../../selectors/cardsSelector';

describe('CardsTable tests', () => {
  let wrapper;
  let fetchCards = jest.fn();
  let isLoadingCardsFalse = jest.fn();

  describe('Without Data', () => {
    beforeEach(() => {
      const props = {
        fetchCards,
        isLoadingCardsFalse,
        cards: {},
        isLoadingCards: fullState.isLoadingReducer.cards,
      };

      wrapper = mount(<CardsTable {...props} />);
    });

    it('Checks useEffect hooks on mount', () => {
      expect(fetchCards).toHaveBeenCalled();
    });
  });

  describe('With Data', () => {
    beforeEach(() => {
      const props = {
        fetchCards,
        isLoadingCardsFalse,
        cards: cardsSelector(fullState),
        isLoadingCards: true, // Force true to test isLoadingCardsFalse method
      };

      wrapper = mount(<CardsTable {...props} />);
    });

    it('Renders the Component', () => {
      const cardsTable = findByTestAttr(wrapper, 'cardsTable');
      expect(cardsTable).not.toBeNull();
    });

    it('Checks useEffect hooks on mount', () => {
      expect(fetchCards).toHaveBeenCalled();
      expect(isLoadingCardsFalse).toHaveBeenCalled();
    });
  });
});
