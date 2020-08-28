import React from 'react';
import { imageDisplay, listDisplay } from '../constants/tableDisplayIcons';
import Container from '../component-library/mui/components/Container';
import EnhancedTypography from '../component-library/mui/components/Typography';
import IconHolder from './IconHolder';
import CardImage from './CardImage';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'inline-flex',
      width: 'auto',
      '& img': {
        maxHeight: '150px',
      },
    },
    textContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});

const ListView = (props) => {
  const classes = useStyles();
  const {
    cardName,
    originalCardName,
    setName,
    tcgUrl,
    tcgSellerDashboardUrl,
    foil,
    tcgImageUrl,
  } = { ...props };
  return (
    <Container disableGutters dataTest='ListView'>
      <Grid container>
        <Grid item xs='4'>
          <CardImage imageUrl={tcgImageUrl} foil={foil} />
        </Grid>
        <Grid className={classes.textContainer} item xs='8'>
          <Container disableGutters>
            <EnhancedTypography largeText bold>
              {cardName}
            </EnhancedTypography>
            <EnhancedTypography>{setName}</EnhancedTypography>
          </Container>
        </Grid>
      </Grid>
      <IconHolder
        scaleSize={0.8}
        foil={foil}
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
