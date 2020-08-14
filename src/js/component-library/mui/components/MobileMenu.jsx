import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Menu, MenuItem } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import RouteMapper from '../../../routes/RouteMapper';

const useStyles = makeStyles((theme) => {
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

export const CustomMenuItem = ({ path, classes, label, onClick }) => {
  return (
    <MenuItem
      onClick={onClick}
      component={Link}
      to={path}
      classes={{ ...classes }}
    >
      {label}
    </MenuItem>
  );
};

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
        <CustomMenuItem
          onClick={handleClose}
          path={RouteMapper.home.path}
          classes={{ root: classes.links }}
          label={RouteMapper.home.label}
        />
        <CustomMenuItem
          onClick={handleClose}
          path={RouteMapper.inventory.cards.path}
          classes={{ root: classes.links }}
          label={RouteMapper.inventory.label}
        />
      </Menu>
    </div>
  );
};

export default MuiMenuIcon;
