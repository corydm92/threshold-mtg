import React from 'react';

const MainView = (props) => {
  const { cards } = { ...props };
  return (
    <>
      <div>Main View</div>
      <div>cards reducer: {JSON.stringify(cards)}</div>
    </>
  );
};

export default MainView;
