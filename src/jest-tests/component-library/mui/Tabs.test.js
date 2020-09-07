import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils/testUtils';
import TabLinks from '../../../js/component-library/mui/components/Tabs';
import { getTabLinksPath } from '../../../utils';

describe('TabLinks tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TabLinks
        initialValue={getTabLinksPath({ pathname: '/inventory/cards' })}
      />
    );
  });

  it('Renders component', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Triggers setValue on click', () => {
    const tabsWrapper = findByTestAttr(wrapper, 'tabs-wrapper');
    tabsWrapper.props().onChange();
  });

  it('leverages getCurrentPath for home', () => {
    expect(getTabLinksPath({ pathname: '/' })).toEqual(1);
  });

  it('leverages getCurrentPath for inventory', () => {
    expect(getTabLinksPath({ pathname: '/inventory' })).toEqual(0);
  });
});
