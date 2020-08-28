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
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
      // flexWrap: 'wrap',
      paddingLeft: theme.spacing(2),
    },
    gridItem: {
      display: 'flex',
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
    language,
  } = { ...props };
  return (
    <Container disableGutters dataTest='ListView'>
      <Grid container data-test='list-view-grid-container'>
        <Grid
          item
          className={classes.gridItem}
          xs='4'
          data-test='list-view-grid-item'
        >
          <CardImage imageUrl={tcgImageUrl} foil={foil} />
        </Grid>
        <Grid
          className={classes.textContainer}
          item
          xs='8'
          data-test='list-view-grid-item'
        >
          <IconHolder
            scaleSize={0.8}
            foil={foil}
            setName={setName}
            tcgUrl={tcgUrl}
            tcgSellerDashboardUrl={tcgSellerDashboardUrl}
            originalCardName={originalCardName}
            language={language}
          />
          <Container disableGutters>
            <EnhancedTypography largeText bold>
              {cardName}
            </EnhancedTypography>
            <EnhancedTypography>{setName}</EnhancedTypography>
          </Container>
        </Grid>
      </Grid>
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
