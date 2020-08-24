import React from 'react';
import { mount } from 'enzyme';
import SideBar from '../../js/components/SideBar';
import { findByTestAttr } from '../../utils/testUtils';
import { fullState } from '../../js/constants/reduxStoreMock';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../js//component-library/mui/mui-theme';

describe('Sidebar tests', () => {
  let wrapper;
  let setPriceCategoryLow = jest.fn();
  let setPriceCategoryMid = jest.fn();
  let setPriceCategoryHigh = jest.fn();
  let setPriceCategoryMarket = jest.fn();

  describe('Whole Component', () => {
    beforeEach(() => {
      const props = {
        priceCategory: fullState.tcgPriceCategory,
        setPriceCategoryLow,
        setPriceCategoryMid,
        setPriceCategoryHigh,
        setPriceCategoryMarket,
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
