import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../../utils/testUtils';
import EnhancedSelect from '../../../../js/component-library/mui/components/Form/Select';

describe('EnhancedSelect Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EnhancedSelect dataTest='data-test-enhanced-select' />);
  });

  it('Renders Select without errors', () => {
    const select = findByTestAttr(wrapper, 'data-test-enhanced-select');
    expect(select).toHaveLength(1); // Tests for existance
  });
});
