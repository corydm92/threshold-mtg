import React from 'react';
import { imageDisplay, listDisplay } from '../constants/tableDisplayIcons';
import Container from '../component-library/mui/components/Container';
import EnhancedTypography from '../component-library/mui/components/Typography';

const ListView = (props) => {
  const { cardName, setName, tcgUrl, tcgInventoryUrl } = { ...props };
  return (
    <Container disableGutters dataTest='ListView'>
      <EnhancedTypography largeText>{cardName}</EnhancedTypography>
      <EnhancedTypography>{setName}</EnhancedTypography>
    </Container>
  );
};

const ImageView = (props) => {
  const { cardName, setName, tcgUrl, tcgImageUrl, tcgInventoryUrl } = {
    ...props,
  };
  return <div data-test='ImageView'></div>;
};

const CardDetails = (props) => {
  const {
    activeDisplay,
    cardName,
    setName,
    tcgUrl,
    tcgImageUrl,
    tcgInventoryUrl,
  } = { ...props };

  switch (activeDisplay) {
    case imageDisplay:
      return (
        <ImageView
          cardName={cardName}
          setName={setName}
          tcgUrl={tcgUrl}
          tcgImageUrl={tcgImageUrl}
          tcgInventoryUrl={tcgInventoryUrl}
        />
      );
    case listDisplay:
      return (
        <ListView
          cardName={cardName}
          setName={setName}
          tcgUrl={tcgUrl}
          tcgInventoryUrl={tcgInventoryUrl}
        />
      );
    default:
      break;
  }
};

export default CardDetails;
