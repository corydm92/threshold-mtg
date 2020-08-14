import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils/testUtils';
import MobileMenu from '../../../js/component-library/mui/components/MobileMenu';

describe('MenuIcon tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MobileMenu />);
  });

  it('Renders the component', () => {
    const mobileMenu = findByTestAttr(wrapper, 'mobile-menu');
    expect(mobileMenu).not.toBeNull();
  });
});
