import React from 'react';

import AppBar from '../component-library/mui/components/AppBar';
import ToolbarMixin from '../component-library/mui/components/ToolbarMixin';
import Container from '../component-library/mui/components/Container';
import Routes from '../routes/Routes';

const MainView = (props) => {
  return (
    <div data-testid='mainView'>
      <AppBar title='MTG Management' />
      <Container>
        <ToolbarMixin>
          <Routes />
        </ToolbarMixin>
      </Container>
    </div>
  );
};

export default MainView;
