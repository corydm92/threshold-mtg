import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';

const MainView = (props) => {
  const {
    cards,
    fetchCards,
    card,
    fetchSingleCard,
    isLoadingCards,
    isLoadingCardsFalse,
  } = {
    ...props,
  };

  useEffect(() => {
    fetchCards();
    fetchSingleCard();
  }, [fetchCards, fetchSingleCard]);

  useEffect(() => {
    if (!isEmpty(cards) && isLoadingCards) {
      isLoadingCardsFalse();
    }
  }, [cards, isLoadingCards, isLoadingCardsFalse]);

  return (
    <>
      <div>Main View</div>
      <div>isLoading: {isLoadingCards.toString()}</div>
      <div>card reducer: {JSON.stringify(card)}</div>
    </>
  );
};

export default MainView;
