import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const EnhancedSelect = (props) => {
  const { dataTest } = { ...props };
  return <Select data-test={dataTest} />;
};

export default EnhancedSelect;
