import React from 'react';
import { Tab } from '@material-ui/core';

const EnhancedTab = (props) => {
  const { label, component, to, dataTest } = { ...props };
  return (
    <Tab label={label} component={component} to={to} data-test={dataTest} />
  );
};

export default EnhancedTab;
