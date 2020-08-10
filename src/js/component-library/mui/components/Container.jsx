import React from 'react';
import { Container } from '@material-ui/core';

const MuiContainer = (props) => {
  const { disableGutters = false } = props;
  return (
    <Container data-test='container' disableGutters={disableGutters}>
      {props.children}
    </Container>
  );
};

export default MuiContainer;
