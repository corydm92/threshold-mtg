import React from 'react';
import Table from '../component-library/mui/components/Table/';

const CardsTable = (props) => {
  const { cards, isLoadingCards } = {
    ...props,
  };

  return (
    <div data-test='cardsTable'>
      <Table cards={cards} isLoadingCards={isLoadingCards} />
    </div>
  );
};

export default CardsTable;
