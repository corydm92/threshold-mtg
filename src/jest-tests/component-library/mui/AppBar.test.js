import React from 'react';
import { shallow } from 'enzyme';
import AppBar from '../../../js/component-library/mui/components/AppBar';

describe('App Bar Component', () => {
  it('Renders AppBar without errors', () => {
    const component = shallow(<AppBar title={'test title'} />);
    // console.log(component.debug()); // Shows render tree

    const appbar = component.find("[data-testid='appbar']");
    const title = component.find("[data-testid='appbar-title']");

    expect(appbar).toHaveLength(1); // Tests for existance
    expect(title.text().includes('test title')).toBe(true); // Tests for value
  });
});
