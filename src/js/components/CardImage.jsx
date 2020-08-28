import React from 'react';
import EnhancedContainer from '../component-library/mui/components/Container';
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
    card: {
      display: 'flex',
    },
    foilCard: {
      backgroundColor: 'rgba(0,0,0,1)',
    },
  };
});

const NonFoilImage = (props) => {
  const { imageUrl } = { ...props };

  return (
    <EnhancedContainer data-test='image-wrapper' disableGutters>
      <img src={imageUrl} alt='mtg-img' />
    </EnhancedContainer>
  );
};

const FoilImage = (props) => {
  const { imageUrl } = { ...props };
  const classes = useStyles();
  return (
    <EnhancedContainer
      data-test='foil-image-wrapper'
      className={classes.foilCard}
      disableGutters
    >
      <img src={imageUrl} alt='mtg-img' />
    </EnhancedContainer>
  );
};

const CardImage = (props) => {
  const classes = useStyles();
  const { imageUrl, foil } = { ...props };
  return (
    <EnhancedContainer classes={{ root: classes.root }} disableGutters>
      {foil ? (
        <FoilImage imageUrl={imageUrl} />
      ) : (
        <NonFoilImage imageUrl={imageUrl} />
      )}
    </EnhancedContainer>
  );
};

export default CardImage;
