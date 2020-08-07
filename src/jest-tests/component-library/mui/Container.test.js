import React from 'react';
import { shallow } from 'enzyme';
import Container from '../../../js/component-library/mui/components/Container';

describe('Container Component', () => {
  it('Renders Container without errors', () => {
    const component = shallow(<Container />);

    const container = component.find("[data-testid='container']");
    expect(container).toHaveLength(1); // Tests for existance
  });
});
