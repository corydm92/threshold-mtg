import React from 'react';
import { Tab } from '@material-ui/core';

const EnhancedTab = (props) => {
  const { label, component, to, dataTest, onChange, value } = { ...props };
  return (
    <Tab
      label={label}
      component={component}
      to={to}
      data-test={dataTest}
      onChange={onChange} // Default prop from MUI, do not pass down manually
      value={value} // Default prop from MUI, do not pass down manually
    />
  );
};

export default EnhancedTab;
