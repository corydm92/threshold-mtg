import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';

const SingleCardView = (props) => {
  const {
    card,
    fetchSingleCard,
    isLoadingCard,
    isLoadingCardFalse,
    match: {
      params: { id },
    },
  } = {
    ...props,
  };

  useEffect(() => {
    fetchSingleCard(id);
  }, [fetchSingleCard, id]);

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
