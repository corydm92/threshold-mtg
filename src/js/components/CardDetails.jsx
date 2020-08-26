import React from 'react';
import { imageDisplay, listDisplay } from '../constants/tableDisplayIcons';
import Container from '../component-library/mui/components/Container';
import EnhancedTypography from '../component-library/mui/components/Typography';
import StarIcon from '@material-ui/icons/Star';
import TcgIcon from '../../assets/icons/tcgPlayer.jpg';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {},
    svg: {
      fill: theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
    },
  };
});

const IconHolder = (props) => {
  const classes = useStyles();
  const { foil } = { ...props };

  console.log(classes);
  return (
    <Container
      classes={{ root: classes.container }}
      disableGutters
      dataTest='IconHolder'
    >
      {foil ? <StarIcon htmlColor='gold' /> : ''}
      <SvgIcon component='div' className={classes.svg}>
        <svg
          aria-hidden='true'
          class=''
          focusable='false'
          height='20'
          width='20'
          version='1.1'
          viewBox='0 0 10.399999 12'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='m4.22 0.8h-2.5536c-0.4496 0-0.8 0.3576-0.8 0.8v8.8c0 0.4424 0.3584 0.8 0.8 0.8h7.0672c0.4496 0 0.8-0.3576 0.8-0.8v-8.8c9e-7 -0.4424-0.3584-0.8-0.8-0.8h-1.4896l0.5472 2.52c0.025596 0.0768-0.00804 0.14-0.1008 0.188-0.0672 0.0352-0.1472 0.0528-0.24 0.0528-0.041604 0-0.072 0-0.092796-4e-3l-2.2712 0.9552 0.656 3.2432c0.020004 0.051204 0.00804 0.099204-0.036 0.144-0.0432 0.044796-0.1096 0.075204-0.1968 0.0912-0.051996 0.00636-0.087996 0.0096-0.108 0.0096-0.1496 0-0.2584-0.039996-0.3256-0.12l-2.444-3.9624c-0.056-0.0776-0.0384-0.148 0.0544-0.212 0.0776-0.048 0.1648-0.072 0.264-0.072 0.02 0 0.0504 0.0032 0.092 0.0096l2.1968-1.128-1.02-1.7152zm-4.22 0.005604c0-0.4456 0.3576-0.8056 0.8-0.8056h8.8c0.4424 0 0.8 0.36 0.8 0.8056v10.389c0 0.4456-0.3576 0.8056-0.8 0.8056h-8.8c-0.4424 0-0.8-0.36-0.8-0.8056z'
            fill-rule='evenodd'
            stroke-width='.8'
            // style={{ fill: '#337ab7' }}
          ></path>
        </svg>
      </SvgIcon>
    </Container>
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
