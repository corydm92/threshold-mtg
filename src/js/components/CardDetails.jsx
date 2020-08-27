import React from 'react';
import { imageDisplay, listDisplay } from '../constants/tableDisplayIcons';
import Container from '../component-library/mui/components/Container';
import EnhancedTypography from '../component-library/mui/components/Typography';
import IconHolder from './IconHolder';

const ListView = (props) => {
  const {
    cardName,
    originalCardName,
    setName,
    tcgUrl,
    tcgSellerDashboardUrl,
    foil,
  } = { ...props };
  return (
    <Container disableGutters dataTest='ListView'>
      <EnhancedTypography largeText>{cardName}</EnhancedTypography>
      <EnhancedTypography>{setName}</EnhancedTypography>
      <IconHolder
        scaleSize={0.8}
        foil={foil}
        cardName={cardName}
        setName={setName}
        tcgUrl={tcgUrl}
        tcgSellerDashboardUrl={tcgSellerDashboardUrl}
        originalCardName={originalCardName}
      />
    </Container>
  );
};

const ImageView = (props) => {
  const { cardName, setName, tcgUrl, tcgImageUrl, tcgSellerDashboardUrl } = {
    ...props,
  };
  return <div data-test='ImageView'></div>;
};

const CardDetails = (props) => {
  const { activeDisplay } = { ...props };

  switch (activeDisplay) {
    case imageDisplay:
      return <ImageView {...props} />;
    case listDisplay:
      return <ListView {...props} />;
    default:
      break;
  }
};

export default CardDetails;
