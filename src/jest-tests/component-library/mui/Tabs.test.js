import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils/testUtils';
import TabLinks, {
  getCurrentPath,
} from '../../../js/component-library/mui/components/Tabs';

describe('TabLinks tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TabLinks location={{ pathname: '/inventory' }} />);
  });

  it('Renders component', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Triggers setValue on click', () => {
    const tabsWrapper = findByTestAttr(wrapper, 'tabs-wrapper');
    tabsWrapper.props().onChange();
  });

  it('leverages getCurrentPath for home', () => {
    expect(getCurrentPath({ pathname: '/' })).toEqual(1);
  });

  it('leverages getCurrentPath for inventory', () => {
    expect(getCurrentPath({ pathname: '/inventory' })).toEqual(0);
  });
});
