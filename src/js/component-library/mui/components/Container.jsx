import React from 'react';
import { Container } from '@material-ui/core';

const MuiContainer = (props) => {
  const { className, classes, disableGutters = false, dataTest } = { ...props };
  return (
    <Container
      className={className}
      classes={classes}
      data-test={dataTest}
      disableGutters={disableGutters}
    >
      {props.children}
    </Container>
  );
};

export default MuiContainer;
