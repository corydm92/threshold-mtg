import React from 'react';
import SingleCardViewContainer from '../containers/SingleCardViewContainer';
import CardsTableContainer from '../containers/CardsTableContainer'
import AppBar from '../component-library/mui/components/AppBar'

const MainView = (props) => {

  return (
    <>
      <AppBar />
      {/* Routing Goes Here */}
      <SingleCardViewContainer />
      <CardsTableContainer />
    </>
  );
};

export default MainView;
