import React from 'react';
import { imageDisplay, listDisplay } from '../constants/tableDisplayIcons';
import Container from '../component-library/mui/components/Container';
import EnhancedTypography from '../component-library/mui/components/Typography';
import StarOutlineIcon from '@material-ui/icons/StarOutlined';

const ListView = (props) => {
  const { cardName, setName, tcgUrl, tcgInventoryUrl, foil } = { ...props };
  console.log(foil);
  return (
    <Container disableGutters dataTest='ListView'>
      <EnhancedTypography largeText>{cardName}</EnhancedTypography>
      <EnhancedTypography>{setName}</EnhancedTypography>
      {foil ? <StarOutlineIcon /> : ''}
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
