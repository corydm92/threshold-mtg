import React from 'react';
import { mount } from 'enzyme';
import CardDetails from '../../js/components/CardDetails';
import { findByTestAttr } from '../../utils/testUtils';
import { fullState } from '../test-mocks/reduxStoreMock';
import { cardsSelector } from '../../selectors/cardsSelector';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../js/component-library/mui/mui-theme';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  imageDisplay,
  listDisplay,
} from '../../js/constants/tableDisplayIcons';

describe('CardDetails tests', () => {
  let wrapper;

  describe('ListView Component', () => {
    beforeEach(() => {
      // Get destructured props from single card result
      const {
        cardName,
        foil,
        language,
        setName,
        tcgImageUrl,
        tcgSellerDashboardUrl,
        tcgUrl,
      } = { ...cardsSelector(fullState)[0] };

      const props = {
        activeDisplay: listDisplay,
        cardName,
        foil,
        language,
        setName,
        tcgImageUrl,
        tcgSellerDashboardUrl,
        tcgUrl,
      };

      wrapper = mount(
        <ThemeProvider theme={theme}>
          <Router>
            <CardDetails {...props} />
          </Router>
        </ThemeProvider>
      );
    });

    it('Renders the Component', () => {
      const listView = findByTestAttr(wrapper, 'ListView');
      const imageView = findByTestAttr(wrapper, 'ImageView');
      expect(listView).not.toHaveLength(0);
      expect(imageView).toHaveLength(0);
    });
  });

  describe('ImageView Component', () => {
    beforeEach(() => {
      // Get destructured props from single card result
      const {
        cardName,
        foil,
        language,
        setName,
        tcgImageUrl,
        tcgSellerDashboardUrl,
        tcgUrl,
      } = { ...cardsSelector(fullState)[0] };

      const props = {
        activeDisplay: imageDisplay,
        cardName,
        foil,
        language,
        setName,
        tcgImageUrl,
        tcgSellerDashboardUrl,
        tcgUrl,
      };

      wrapper = mount(
        <ThemeProvider theme={theme}>
          <Router>
            <CardDetails {...props} />
          </Router>
        </ThemeProvider>
      );
    });

    it('Renders the Component', () => {
      const listView = findByTestAttr(wrapper, 'ListView');
      const imageView = findByTestAttr(wrapper, 'ImageView');
      expect(listView).toHaveLength(0);
      expect(imageView).not.toHaveLength(0);
    });
  });
});
