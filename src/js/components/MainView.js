import React, { useEffect } from 'react';

const MainView = (props) => {
  const { cards, fetchCards, fetchCard, isLoading } = { ...props };
  console.log(props);

  useEffect(() => {
    // fetchCards();
    fetchCard('1383');
  }, [fetchCard, cards]);

  return (
    <>
      <div>Main View</div>
      <div>isLoading: {isLoading.toString()}</div>
      <div>cards reducer: {JSON.stringify(cards)}</div>
    </>
  );
};

export default MainView;
