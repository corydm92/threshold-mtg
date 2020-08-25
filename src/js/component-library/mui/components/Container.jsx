import React from 'react';
import { Container } from '@material-ui/core';

const MuiContainer = (props) => {
  const { className, classes, disableGutters = false } = { ...props };
  return (
    <Container
      className={className}
      classes={classes}
      data-test='container'
      disableGutters={disableGutters}
    >
      {props.children}
    </Container>
  );
};

export default MuiContainer;
