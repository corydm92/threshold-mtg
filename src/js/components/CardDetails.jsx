import React from 'react';
import { imageDisplay, listDisplay } from '../constants/tableDisplayIcons';
import Container from '../component-library/mui/components/Container';
import EnhancedTypography from '../component-library/mui/components/Typography';
import StarIcon from '@material-ui/icons/Star';

const IconHolder = (props) => {
  const { foil } = { ...props };
  return (
    <React.Fragment>{foil ? <StarIcon htmlColor='gold' /> : ''}</React.Fragment>
  );
};

const ListView = (props) => {
  const { cardName, setName, tcgUrl, tcgInventoryUrl, foil } = { ...props };
  console.log(foil);
  return (
    <Container disableGutters dataTest='ListView'>
      <EnhancedTypography largeText>{cardName}</EnhancedTypography>
      <EnhancedTypography>{setName}</EnhancedTypography>
      <IconHolder foil={foil} />
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
