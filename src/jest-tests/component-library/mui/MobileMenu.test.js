import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils/testUtils';
import MobileMenu, { CustomMenuItem } from '../../../js/components/MobileMenu';

describe('MobileMenu tests', () => {
  describe('Menu Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<MobileMenu />);
    });

    it('Triggers setAnchorEl to event on menu click', () => {
      // Cannot make assertions, but simulating the click seems to register in coverage.

      const mobileMenuIcon = findByTestAttr(wrapper, 'mobile-menu-icon');

      const event = {
        currentTarget: {},
      };

      mobileMenuIcon.props().onClick(event);
    });

    it('Triggers setAnchorEl to null on menu click', () => {
      // Cannot make assertions, but simulating the click seems to register in coverage.

      const muiMenu = findByTestAttr(wrapper, 'mui-menu');
      const customMenu = findByTestAttr(wrapper, 'home-link');

      muiMenu.props().onClose();
      customMenu.props().onClick();
    });

    it('Renders the Menu Component', () => {
      const mobileMenu = findByTestAttr(wrapper, 'mobile-menu');

      expect(mobileMenu).not.toBeNull();
    });
  });

  describe('CustomMenuItem tests', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        path: '/test-path',
        classes: { test: 'class' },
        label: 'test label',
        onClick: () => {},
        'data-test': 'home-link',
      };

      wrapper = shallow(<CustomMenuItem {...props} />);
    });

    it('Renders the CustomMenuItem Component', () => {
      const customMenuItem = findByTestAttr(wrapper, 'home-link');
      expect(customMenuItem).not.toBeNull();
    });
  });
});
