import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

const EnhancedTooltip = React.forwardRef((props, ref) => {
  const { title, placement = 'bottom', arrow = true } = { ...props };
  return (
    <Tooltip
      title={title}
      placement={placement}
      arrow={arrow}
      enterDelay={500}
      enterNextDelay={500}
      ref={ref}
    >
      {props.children}
    </Tooltip>
  );
});

export default EnhancedTooltip;
