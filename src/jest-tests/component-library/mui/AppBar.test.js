import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils/testUtils';
import AppBar from '../../../js/component-library/mui/components/AppBar';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/',
  }),
}));

describe('App Bar Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AppBar title={'test title'} />);
  });

  it('Renders AppBar without errors', () => {
    const appbar = findByTestAttr(wrapper, 'appbar');
    const title = findByTestAttr(wrapper, 'appbar-title');

    expect(appbar).toHaveLength(1); // Tests for existance
    expect(title.text().includes('test title')).toBe(true); // Tests for value
  });
});
