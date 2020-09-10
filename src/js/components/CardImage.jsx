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
        width: '96px',
        height: '135px',
        maxWidth: 'inherit',
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
        height: '135px',
        width: '96px',
        maxWidth: 'inherit',
        backgroundImage:
          'linear-gradient(135deg, rgba(222,197,37,0) 0%, rgba(222,197,37,0) 1%, rgba(255,8,8,0.06) 19%, rgba(239,111,23,0.1) 32%, rgba(222,213,37,0.23) 45%, rgba(36,222,101,0.39) 62%, rgba(47,221,109,0.4) 63%, rgba(216,208,239,0.39) 79%, rgba(131,123,173,0.38) 88%, rgba(136,129,178,0.38) 89%, rgba(193,191,234,0) 100%)',
        marginTop: '-140px',
        borderRadius: '8px',
        content: "''",
      },
    },
  };
});

const Image = (props) => {
  const { tcgImageUrl, foil } = { ...props };
  const classes = useStyles();

  const dataTest = foil ? 'foil-image-wrapper' : 'image-wrapper';
  return (
    <Link to={{ pathname: tcgImageUrl }} target='_blank'>
      <EnhancedContainer
        className={foil ? classes.foilCard : classes.card}
        dataTest={dataTest}
        disableGutters
      >
        <img src={tcgImageUrl} alt='mtg-img' />
      </EnhancedContainer>
    </Link>
  );
};

const CardImage = (props) => {
  const classes = useStyles();
  const { tcgImageUrl, foil } = { ...props };
  return (
    <EnhancedContainer
      dataTest='CardImage'
      classes={{ root: classes.root }}
      disableGutters
    >
      <Image tcgImageUrl={tcgImageUrl} foil={foil} />
    </EnhancedContainer>
  );
};

export default CardImage;
