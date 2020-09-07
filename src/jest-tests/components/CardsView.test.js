import React from 'react';
import { mount } from 'enzyme';
import CardsView from '../../js/components/CardsView';
import { findByTestAttr } from '../../utils/testUtils';
import { fullState } from '../test-mocks/reduxStoreMock';
import { cardsSelector } from '../../selectors/cardsSelector';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../js/component-library/mui/mui-theme';

describe('CardsView tests', () => {
  let wrapper;

  // STORE
  const priceCategory = fullState.tcgPriceCategory;
  const cardNamesAndSets = [];
  const filterValues = fullState.filterReducer;

  // ACTIONS
  let isLoadingCardsFalse = jest.fn();
  let setPriceCategoryLow = jest.fn();
  let setPriceCategoryMid = jest.fn();
  let setPriceCategoryHigh = jest.fn();
  let setPriceCategoryMarket = jest.fn();
  let setFilterOptions = jest.fn();
  let clearFilterOptions = jest.fn();

  describe('Init State / No Data', () => {
    beforeEach(() => {
      const props = {
        // STORE
        priceCategory,
        cards: [],
        isLoadingCards: fullState.isLoadingReducer.cards,
        cardNamesAndSets,
        filterValues,

        // ACTIONS
        isLoadingCardsFalse,
        setPriceCategoryLow,
        setPriceCategoryMid,
        setPriceCategoryHigh,
        setPriceCategoryMarket,
        setFilterOptions,
        clearFilterOptions,
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
        // STORE
        cards: cardsSelector(fullState),
        isLoadingCards: true, // Force true to test isLoadingCardsFalse method
        cardNamesAndSets,
        filterValues,

        // ACTIONS
        isLoadingCardsFalse,
        setPriceCategoryLow,
        setPriceCategoryMid,
        setPriceCategoryHigh,
        setPriceCategoryMarket,
        setFilterOptions,
        clearFilterOptions,
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
