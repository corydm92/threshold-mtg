import React from 'react';

const CardsTable = (props) => {
  const { cards, isLoadingCards } = {
    ...props,
  };

  return (
    <div data-test='cardsTable'>
      <div>Cards Table</div>
      <div>isLoading: {isLoadingCards.toString()}</div>
      <div>cards reducer: {JSON.stringify(cards)}</div>
    </div>
  );
};

export default CardsTable;
