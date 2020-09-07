import React from 'react';
import { mount } from 'enzyme';
import SideBar from '../../js/components/SideBar';
import { findByTestAttr } from '../../utils/testUtils';
import { fullState } from '../test-mocks/reduxStoreMock';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../js//component-library/mui/mui-theme';

describe('Sidebar tests', () => {
  let wrapper;
  // STORE
  const priceCategory = fullState.tcgPriceCategory;
  const cardNamesAndSets = [];
  const filterValues = fullState.filterReducer;

  // ACTIONS
  let setPriceCategoryLow = jest.fn();
  let setPriceCategoryMid = jest.fn();
  let setPriceCategoryHigh = jest.fn();
  let setPriceCategoryMarket = jest.fn();
  let setFilterOptions = jest.fn();
  let clearFilterOptions = jest.fn();

  describe('Whole Component', () => {
    beforeEach(() => {
      const props = {
        // STORE
        priceCategory,
        cardNamesAndSets,
        filterValues,

        // ACTIONS
        setPriceCategoryLow,
        setPriceCategoryMid,
        setPriceCategoryHigh,
        setPriceCategoryMarket,
        setFilterOptions,
        clearFilterOptions,
      };

      wrapper = mount(
        <ThemeProvider theme={theme}>
          <SideBar {...props} />
        </ThemeProvider>
      );
    });

    it('Renders the Component', () => {
      const sideBar = findByTestAttr(wrapper, 'SideBar');
      expect(sideBar).toHaveLength(1);
    });
  });
});
