import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../../utils/testUtils';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../js/component-library/mui/mui-theme';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderNavigation from '../../js/components/HeaderNavigation';

describe('HeaderNavigation tests', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      title: 'data-test-header-navigation',
    };

    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Router>
          <HeaderNavigation {...props} />
        </Router>
      </ThemeProvider>
    );
  });

  it('Renders the Component', () => {
    const headerNavigation = findByTestAttr(wrapper, 'ListView');
  });
});
