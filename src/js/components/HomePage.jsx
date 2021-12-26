import React from 'react';
import { Button } from '@material-ui/core';

const HomePage = (props) => {
  console.log(props);

  return (
    <div data-test='homePage'>
      <Button color='primary' variant='contained' style={{ marginTop: '24px' }}>
        Export CSV
      </Button>
    </div>
  );
};

export default HomePage;
