import React, { useEffect } from 'react';

import HeaderNavigation from './HeaderNavigation';
import ToolbarMixin from '../component-library/mui/components/ToolbarMixin';
import Container from '../component-library/mui/components/Container';
import Routes from '../routes/Routes';

const MainView = (props) => {
  const { fetchCards } = { ...props };

  useEffect(() => {
    fetchCards('/?limit=20');
    // fetchCards();
  }, [fetchCards]);

  return (
    <div data-test='mainView'>
      <HeaderNavigation title='Threshold MTG' />
      <Container>
        <ToolbarMixin>
          <Routes />
        </ToolbarMixin>
      </Container>
    </div>
  );
};

export default MainView;
