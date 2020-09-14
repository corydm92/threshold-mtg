import React from 'react';
import EnhancedToolbar from '../component-library/mui/components/Toolbar';
import Grid from '@material-ui/core/Grid';
import TableDisplayIcons from './TableDisplayIcons';

const CardsTableToolbar = (props) => {
  const { handleDisplayChange, activeDisplay } = { ...props };

  return (
    <EnhancedToolbar>
      <Grid container>
        <Grid item xs={10}>
          {/* Left Aligned Items Here */}
        </Grid>
        <Grid item xs={2}>
          <TableDisplayIcons
            onClick={handleDisplayChange}
            activeDisplay={activeDisplay}
          />
        </Grid>
      </Grid>
    </EnhancedToolbar>
  );
};

export default CardsTableToolbar;
