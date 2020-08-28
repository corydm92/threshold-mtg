import React from 'react';
import EnhancedContainer from '../component-library/mui/components/Container';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'inline-flex',
      width: 'auto',
      margin: 0,
      '& img': {
        height: '150px',
        width: '105px',
        borderRadius: '8px',
        border: '1px solid black',
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
        width: '105px',
        borderRadius: '8px',
        content: "''",
      },
    },
  };
});

const Image = (props) => {
  const { imageUrl, foil } = { ...props };
  const classes = useStyles();

  const dataTest = foil ? 'foil-image-wrapper' : 'image-wrapper';

  return (
    <Link to={{ pathname: imageUrl }} target='_blank'>
      <EnhancedContainer
        className={foil ? classes.foilCard : classes.card}
        dataTest={dataTest}
        disableGutters
      >
        <img src={imageUrl} alt='mtg-img' />
      </EnhancedContainer>
    </Link>
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
      <Image imageUrl={imageUrl} foil={foil} />
    </EnhancedContainer>
  );
};

export default CardImage;
