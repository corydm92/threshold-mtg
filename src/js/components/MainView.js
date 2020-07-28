import React, { useEffect } from 'react';

const MainView = (props) => {
  const { cards, fetchCards, isLoading } = { ...props };
  console.log(props);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  return (
    <>
      <div>Main View</div>
      <div>isLoading: {isLoading.toString()}</div>
      <div>cards reducer: {JSON.stringify(cards[15])}</div>
    </>
  );
};

export default MainView;
