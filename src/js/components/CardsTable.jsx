import React from 'react';
import MuiTable from '../component-library/mui/components/Table';

const CardsTable = (props) => {
  const { cards, isLoadingCards } = {
    ...props,
  };

  return (
    <div data-test='cardsTable'>
      <div>Cards Table</div>
      <div>isLoading: {isLoadingCards.toString()}</div>
      {/* <div>cards reducer: {JSON.stringify(cards)}</div> */}
      <MuiTable cards={cards} />
    </div>
  );
};

export default CardsTable;
