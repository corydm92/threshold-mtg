import React from 'react';
import EnhancedButton from '../component-library/mui/components/Form/Button';

const SideBarFilterForm = () => {
  return (
    <form data-test='side-bar-filter-form'>
      Card Name (Input) {'\n'}
      Card Set (Input) {'\n'}
      Foil (Checkbox) {'\n'}
      Spread (Input) {'\n'}
      Gain (Input) {'\n'}
      Date From (Date) {'\n'}
      Date To (Date)
      <EnhancedButton buttonText='Submit' />
    </form>
  );
};

export default SideBarFilterForm;
