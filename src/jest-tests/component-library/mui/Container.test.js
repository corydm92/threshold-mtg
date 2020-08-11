import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils/testUtils';
import Container from '../../../js/component-library/mui/components/Container';

describe('Container Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Container />);
  });

  it('Renders Container without errors', () => {
    const container = findByTestAttr(wrapper, 'container');
    expect(container).toHaveLength(1); // Tests for existance
  });
});
