import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';

const MainView = (props) => {
  const { cards, fetchCards, isLoading, isLoadingCardsFalse } = { ...props };

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  useEffect(() => {
    if (!isEmpty(cards) && isLoading) {
      isLoadingCardsFalse();
    }
  }, [cards, isLoading, isLoadingCardsFalse]);

  return (
    <>
      <div>Main View</div>
      <div>isLoading: {isLoading.toString()}</div>
      <div>cards reducer: {JSON.stringify(cards)}</div>
    </>
  );
};

export default MainView;
