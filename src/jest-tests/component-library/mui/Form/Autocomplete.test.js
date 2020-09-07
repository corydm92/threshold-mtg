import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../../utils/testUtils';
import EnhancedAutocomplete from '../../../../js/component-library/mui/components/Form/Autocomplete';

describe('EnhancedAutocomplete Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <EnhancedAutocomplete dataTest='data-test-enhanced-autocomplete' />
    );
  });

  it('Renders Autocomplete without errors', () => {
    const autoComplete = findByTestAttr(
      wrapper,
      'data-test-enhanced-autocomplete'
    );
    expect(autoComplete).toHaveLength(1); // Tests for existance
  });
});
