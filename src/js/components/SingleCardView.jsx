import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';

const SingleCardView = (props) => {
  const { card, fetchSingleCard, isLoadingCard, isLoadingCardFalse } = {
    ...props,
  };

  console.log(props);

  useEffect(() => {
    fetchSingleCard('1679');
  }, [fetchSingleCard]);

  useEffect(() => {
    if (!isEmpty(card) && isLoadingCard) {
      isLoadingCardFalse();
    }
  }, [card, isLoadingCard, isLoadingCardFalse]);

  return (
    <div data-testid='singleCardView'>
      <div>Single Card View</div>
      <div>isLoadingCard: {isLoadingCard.toString()}</div>
      <div>card reducer: {JSON.stringify(card)}</div>
    </div>
  );
};

export default SingleCardView;
