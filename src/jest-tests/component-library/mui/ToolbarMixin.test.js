import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils/testUtils';
import ToolbarMixin from '../../../js/component-library/mui/components/ToolbarMixin';

describe('Container Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ToolbarMixin />);
  });

  it('Renders Container without errors', () => {
    const container = findByTestAttr(wrapper, 'toolbarMixin');
    expect(container).toHaveLength(1); // Tests for existance
  });
});
