import React from 'react';
import { imageDisplay, listDisplay } from '../constants/tableDisplayIcons';
import EnhancedTypography from '../component-library/mui/components/Typography';
import EnhancedContainer from '../component-library/mui/components/Container';
import IconHolder from './IconHolder';
import { makeStyles } from '@material-ui/styles';
import { formatDateString } from '../../utils';

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
      height: '100%',
      paddingLeft: theme.spacing(2),
      display: 'flex',
      flexWrap: 'wrap',
    },
    gridItem: {
      display: 'flex',
    },
    fullWidth: {
      width: '100%',
    },
  };
});

const ListView = (props) => {
  const classes = useStyles();
  let {
    cardName,
    setName,
    tcgUrl,
    tcgSellerDashboardUrl,
    foil,
    language,
    dateFrom,
    dateTo,
    handlePriceCalc,
  } = { ...props };

  // Sets date to xx/xx/xxxx format
  dateFrom = formatDateString(dateFrom);
  dateTo = formatDateString(dateTo);

  return (
    <EnhancedContainer className={classes.textContainer} disableGutters>
      <div className={classes.fullWidth} data-test='top-display'>
        <IconHolder
          scaleSize={1}
          foil={foil}
          setName={setName}
          tcgUrl={tcgUrl}
          tcgSellerDashboardUrl={tcgSellerDashboardUrl}
          cardName={cardName}
          language={language}
          handlePriceCalc={handlePriceCalc}
        />
        <EnhancedTypography largeText bold>
          {cardName}
        </EnhancedTypography>
        <EnhancedTypography>{setName}</EnhancedTypography>
      </div>

      <div className={classes.fullWidth} data-test='bottom-display'>
        <EnhancedTypography>
          {dateFrom !== dateTo ? `${dateFrom} - ${dateTo}` : dateFrom}
        </EnhancedTypography>
      </div>
    </EnhancedContainer>
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
