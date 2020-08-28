import React from 'react';
import { Container } from '@material-ui/core';

const MuiContainer = (props) => {
  const { className, classes, disableGutters = false, dataTest, style } = {
    ...props,
  };
  return (
    <Container
      className={className}
      classes={classes}
      data-test={dataTest}
      disableGutters={disableGutters}
      style={style}
    >
      {props.children}
    </Container>
  );
};

export default MuiContainer;
