import React from 'react';
import { shallow } from 'enzyme';
import ToolbarMixin from '../../../js/component-library/mui/components/ToolbarMixin';

describe('Container Component', () => {
  it('Renders Container without errors', () => {
    const component = shallow(<ToolbarMixin />);

    const container = component.find("[data-testid='toolbarMixin']");
    expect(container).toHaveLength(1); // Tests for existance
  });
});
