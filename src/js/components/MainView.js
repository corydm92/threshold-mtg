import React, { useEffect } from 'react';

const MainView = (props) => {
  const { cards, fetchCards, isLoading } = { ...props };

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  return (
    <>
      <div>Main View</div>
      <div>isLoading: {isLoading.toString()}</div>
      <div>cards reducer: {JSON.stringify(cards)}</div>
    </>
  );
};

export default MainView;
