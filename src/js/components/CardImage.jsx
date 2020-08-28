import React from 'react';
import EnhancedContainer from '../component-library/mui/components/Container';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'inline-flex',
      width: 'auto',
      margin: 0,
      '& img': {
        maxHeight: '150px',
        borderRadius: '5px',
      },
    },
    card: {
      display: 'flex',
    },
    foilCard: {
      '&:after': {
        display: 'block',
        position: 'relative',
        backgroundImage:
          'linear-gradient(110deg, rgb(255, 166, 0, .3) , rgb(255, 255, 0, .3), rgb(0, 128, 0, .3), rgb(0, 255, 255, .3), rgb(0, 0, 255, .3), rgb(238, 130, 238, .3))',
        marginTop: '-155px',
        height: '150px',
        borderRadius: '5px',
        content: "''",
      },
    },
  };
});

const NonFoilImage = (props) => {
  const { imageUrl } = { ...props };

  return (
    <EnhancedContainer dataTest='image-wrapper' disableGutters>
      <img src={imageUrl} alt='mtg-img' />
    </EnhancedContainer>
  );
};

const FoilImage = (props) => {
  const { imageUrl } = { ...props };
  const classes = useStyles();
  return (
    <EnhancedContainer
      dataTest='foil-image-wrapper'
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
    <EnhancedContainer
      dataTest='CardImage'
      classes={{ root: classes.root }}
      disableGutters
    >
      {foil ? (
        <FoilImage imageUrl={imageUrl} />
      ) : (
        <NonFoilImage imageUrl={imageUrl} />
      )}
    </EnhancedContainer>
  );
};

export default CardImage;
