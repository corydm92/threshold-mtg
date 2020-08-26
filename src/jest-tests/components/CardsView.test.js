import React from 'react';
import { mount } from 'enzyme';
import CardsView from '../../js/components/CardsView';
import { findByTestAttr } from '../../utils/testUtils';
import { fullState } from '../../js/constants/test-mocks/reduxStoreMock';
import { cardsSelector } from '../../selectors/cardsSelector';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../js//component-library/mui/mui-theme';

describe('CardsView tests', () => {
  let wrapper;
  let fetchCards = jest.fn();
  let isLoadingCardsFalse = jest.fn();
  let setPriceCategoryLow = jest.fn();
  let setPriceCategoryMid = jest.fn();
  let setPriceCategoryHigh = jest.fn();
  let setPriceCategoryMarket = jest.fn();
  const priceCategory = 'market_price';

  describe('Init State / No Data', () => {
    beforeEach(() => {
      const props = {
        fetchCards,
        isLoadingCardsFalse,
        setPriceCategoryLow,
        setPriceCategoryMid,
        setPriceCategoryHigh,
        setPriceCategoryMarket,
        priceCategory,
        cards: [],
        isLoadingCards: fullState.isLoadingReducer.cards,
      };

      wrapper = mount(
        <ThemeProvider theme={theme}>
          <CardsView {...props} />
        </ThemeProvider>
      );
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
        setPriceCategoryLow,
        setPriceCategoryMid,
        setPriceCategoryHigh,
        setPriceCategoryMarket,
        cards: cardsSelector(fullState),
        isLoadingCards: true, // Force true to test isLoadingCardsFalse method
      };

      wrapper = mount(
        <ThemeProvider theme={theme}>
          <CardsView {...props} />
        </ThemeProvider>
      );
    });

    it('Renders Container', () => {
      const cardsViewComponent = findByTestAttr(wrapper, 'cardsView');
      expect(cardsViewComponent).toHaveLength(1);
    });

    it('Checks useEffect hooks on mount', () => {
      expect(isLoadingCardsFalse).toHaveBeenCalled();
    });
  });
});
