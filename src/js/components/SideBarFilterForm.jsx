import React from 'react';
import EnhancedButton from '../component-library/mui/components/Form/Button';
import EnhancedTextField from '../component-library/mui/components/Form/TextField';

const SideBarFilterForm = (props) => {
  console.log(props);
  const { collectionCardNames } = { ...props };
  return (
    <form data-test='side-bar-filter-form'>
      <EnhancedTextField
        fullWidth
        label='Card Name'
        useAutocomplete
        autocompleteOptions={collectionCardNames}
      />
      {/* Card Name (Input) {'\n'}
      Card Set (Input) {'\n'}
      Foil (Checkbox) {'\n'}
      Spread (Input) {'\n'}
      Gain (Input) {'\n'}
      Date From (Date) {'\n'}
      Date To (Date) */}
      <EnhancedButton buttonText='Submit' />
    </form>
  );
};

export default SideBarFilterForm;
