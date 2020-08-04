import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import SingleCardViewContainer from '../containers/SingleCardViewContainer';
import AppBar from '../component-library/mui-components/AppBar'

const MainView = (props) => {
  const { cards, fetchCards, isLoadingCards, isLoadingCardsFalse } = {
    ...props,
  };

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  useEffect(() => {
    if (!isEmpty(cards) && isLoadingCards) {
      isLoadingCardsFalse();
    }
  }, [cards, isLoadingCards, isLoadingCardsFalse]);

  return (
    <>
      <AppBar />
      <SingleCardViewContainer />
      <br />
      <div>Main View</div>
      <div>isLoading: {isLoadingCards.toString()}</div>
      <div>cards reducer: {JSON.stringify(cards)}</div>
    </>
  );
};

export default MainView;
