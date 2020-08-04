import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';

const SingleCardView = (props) => {
  const { card, fetchSingleCard, isLoadingCard, isLoadingCardFalse } = {
    ...props,
  };

  useEffect(() => {
    fetchSingleCard();
  }, [fetchSingleCard]);

  useEffect(() => {
    if (!isEmpty(card) && isLoadingCard) {
      isLoadingCardFalse();
    }
  }, [card, isLoadingCard, isLoadingCardFalse]);

  return (
    <React.Fragment>
      <div>Single Card View</div>
      <div>isLoadingCard: {isLoadingCard.toString()}</div>
      <div>card reducer: {JSON.stringify(card)}</div>
    </React.Fragment>
  );
};

export default SingleCardView;
