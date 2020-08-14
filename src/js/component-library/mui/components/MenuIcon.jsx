import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Menu, MenuItem } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import RouteMapper from '../../../routes/RouteMapper';

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      // down() works as a "less than"
      [theme.breakpoints.down('md')]: {
        display: 'block',
      },
      // down() works as a "greater than"
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    links: {
      color: theme.palette.primary.main,
    },
  };
});

const MuiMenuIcon = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div data-test='mobile-menu' className={classes.root}>
      <IconButton edge={false} color='inherit' aria-label='menu'>
        <MenuIcon onClick={handleClick} fontSize='large' />
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          component={Link}
          to={RouteMapper.home.path}
          classes={{
            root: classes.links,
          }}
        >
          {RouteMapper.home.label}
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to={RouteMapper.inventory.cards.path}
          classes={{
            root: classes.links,
          }}
        >
          {RouteMapper.inventory.label}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MuiMenuIcon;
