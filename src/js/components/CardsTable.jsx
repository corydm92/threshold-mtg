import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';

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
    <React.Fragment>
      <div>Cards Table</div>
      <div>isLoading: {isLoadingCards.toString()}</div>
      <div>cards reducer: {JSON.stringify(cards)}</div>
    </React.Fragment>
  );
};

export default CardsTable;
