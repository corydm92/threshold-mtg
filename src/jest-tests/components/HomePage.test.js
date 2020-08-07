import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../js/components/HomePage';

describe('HomePage tests', () => {
  it('Renders the Component', () => {
    const component = shallow(<HomePage />);

    const homePage = component.find("[data-testid='homePage']");

    expect(homePage).toHaveLength(1); // Tests for existance
  });
});
