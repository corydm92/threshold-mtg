import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils/testUtils';
import HomePage from '../../js/components/HomePage';

describe('HomePage tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it('Renders the Component', () => {
    const homePage = findByTestAttr(wrapper, 'homePage');

    expect(homePage).not.toBeNull();
  });
});
