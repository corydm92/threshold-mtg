import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../../utils/testUtils';
import Autocomplete from '../../../../js/component-library/mui/components/Form/Autocomplete';

describe('Autocomplete Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Autocomplete dataTest='data-test-autocomplete' />);
  });

  it('Renders Autocomplete without errors', () => {
    const autoComplete = findByTestAttr(wrapper, 'data-test-autocomplete');
    expect(autoComplete).toHaveLength(1); // Tests for existance
  });
});
