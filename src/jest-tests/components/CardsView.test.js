import React from 'react';
import { mount } from 'enzyme';
import CardsView from '../../js/components/CardsView';
import { findByTestAttr } from '../../utils/testUtils';
import { fullState } from '../../js/constants/reduxStoreMock';
import { cardsSelector } from '../../selectors/cardsSelector';

describe('CardsView tests', () => {
  let wrapper;
  let fetchCards = jest.fn();
  let isLoadingCardsFalse = jest.fn();

  describe('Init State / No Data', () => {
    beforeEach(() => {
      const props = {
        fetchCards,
        isLoadingCardsFalse,
        cards: {},
        isLoadingCards: fullState.isLoadingReducer.cards,
      };

      wrapper = mount(<CardsView {...props} />);
    });

    it('Checks useEffect hooks on mount', () => {
      expect(fetchCards).toHaveBeenCalled();
    });

    it('Renders Container', () => {
      const cardsViewComponent = findByTestAttr(wrapper, 'cardsView');
      expect(cardsViewComponent).toHaveLength(1);
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

      wrapper = mount(<CardsView {...props} />);
    });

    it('Renders Container', () => {
      const cardsViewComponent = findByTestAttr(wrapper, 'cardsView');
      expect(cardsViewComponent).toHaveLength(1);
    });

    it('Checks useEffect hooks on mount', () => {
      expect(fetchCards).toHaveBeenCalled();
      expect(isLoadingCardsFalse).toHaveBeenCalled();
    });
  });
});
