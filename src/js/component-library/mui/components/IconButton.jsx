import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: (props) => {
        return props.matches ? '12px' : '8px';
      },
    },
  };
});

const EnhancedIconButton = React.forwardRef((props, ref) => {
  // Returns true if viewport width >= 600px
  const matches = useMediaQuery('(min-width:600px)');

  const classes = useStyles({ matches });
  const {
    edge,
    color,
    ariaLabel,
    onClick,
    dataTest,
    className,
    ariaExpanded,
  } = { ...props };

  return (
    <IconButton
      classes={{ root: classes.root }}
      edge={edge}
      color={color}
      aria-label={ariaLabel}
      onClick={onClick}
      data-test={dataTest}
      className={className}
      aria-expanded={ariaExpanded}
      ref={ref}
    >
      {props.children}
    </IconButton>
  );
});

export default EnhancedIconButton;
