import React, { useEffect } from 'react';

const MainView = (props) => {
  const { cards, fetchCardsData } = { ...props };
  console.log(props);

  useEffect(() => {
    console.log('here');
    fetchCardsData();
  }, [fetchCardsData]);

  return (
    <>
      <div>Main View</div>
      <div>cards reducer: {JSON.stringify(cards)}</div>
    </>
  );
};

export default MainView;
