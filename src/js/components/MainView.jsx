import React from 'react';
import SingleCardViewContainer from '../containers/SingleCardViewContainer';
import CardsTableContainer from '../containers/CardsTableContainer';
import AppBar from '../component-library/mui/components/AppBar';
import ToolbarMixin from '../component-library/mui/components/ToolbarMixin';
import Container from '../component-library/mui/components/Container';

const MainView = (props) => {
  return (
    <React.Fragment>
      <AppBar title='MTG Management' />
      <Container disableGutters={false}>
        <ToolbarMixin>
          {/* Routing Goes Here */}
          <SingleCardViewContainer />
          <CardsTableContainer />
        </ToolbarMixin>
      </Container>
    </React.Fragment>
  );
};

export default MainView;
