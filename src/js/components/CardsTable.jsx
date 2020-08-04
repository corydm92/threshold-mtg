import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import SingleCardViewContainer from '../containers/SingleCardViewContainer';
import AppBar from '../component-library/mui/components/AppBar'

const CardsTable = (props) => {
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
      <br />
      <div>Cards Table</div>
      <div>isLoading: {isLoadingCards.toString()}</div>
      <div>cards reducer: {JSON.stringify(cards)}</div>
    </>
  );
};

export default CardsTable;
