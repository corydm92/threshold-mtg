import React from 'react';
import Table from '../component-library/mui/components/Table/';

const CardsTable = (props) => {
  const { cards, isLoadingCards } = {
    ...props,
  };

  return (
    <div data-test='cardsTable'>
      <div>Cards Table</div>
      <div>isLoading: {isLoadingCards.toString()}</div>
      {/* <div>cards reducer: {JSON.stringify(cards)}</div> */}
      <Table cards={cards} />
    </div>
  );
};

export default CardsTable;
