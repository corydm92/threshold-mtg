import React from 'react';
import EnhancedTypography from '../component-library/mui/components/Typography';
import EnhancedContainer from '../component-library/mui/components/Container';
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

const CardDetails = (props) => {
  const classes = useStyles();
  let { cardName, setName, dateFrom, dateTo, className } = { ...props };

  // Sets date to xx/xx/xxxx format
  dateFrom = formatDateString(dateFrom);
  dateTo = formatDateString(dateTo);

  return (
    <EnhancedContainer
      classes={{ root: classes.textContainer }}
      className={className}
      disableGutters
    >
      <div className={classes.fullWidth} data-test='top-display'>
        {props.children}
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

export default CardDetails;
