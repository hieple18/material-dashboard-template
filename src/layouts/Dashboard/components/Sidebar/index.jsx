import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../../../assets/images/logo/logovn.png';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
  Drawer,
  IconButton
} from '@material-ui/core';

// Material icons
import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  ShoppingBasketOutlined as ShoppingBasketIcon,
  LockOpenOutlined as LockOpenIcon,
  TextFields as TextFieldsIcon,
  ImageOutlined as ImageIcon,
  InfoOutlined as InfoIcon,
  AccountBoxOutlined as AccountBoxIcon,
  SettingsOutlined as SettingsIcon,
  Close as CloseIcon,
} from '@material-ui/icons';

// // CLSX utility for constructing `className` 
// import clsx from 'clsx';

// Component styles
import styles from './styles';

class Sidebar extends Component {
  render() {
    const { classes, className, onClose, open, anchor, isMobile, onToggleSidebar } = this.props;

    // const rootClassName = classNames(classes.root, className);

    const navMenu = [
      {
        to: '/dashboard',
        name: 'Dashboard',
        icon: <DashboardIcon />
      },
      {
        to: '/users',
        name: 'Users',
        icon: <PeopleIcon />

      },
      {
        to: '/products',
        name: 'Products',
        icon: <ShoppingBasketIcon />
      }
    ]

    return (
      <Drawer
        anchor={anchor}
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        onClose={onClose}
        open={open}
        variant={isMobile ? 'temporary' : 'permanent'}
      >
        <div className={classes.sidebar}>

          <div className={classes.toolbar}>
            <div className={classes.logoWrapper}>
              <Link
                className={classes.logoLink}
                to="/"
              >
                <img
                  alt="Logo"
                  className={classes.logoImage}
                  src={logo}
                />
              </Link>
            </div>

            <IconButton
              className={classNames(classes.menuButton, {
                [classes.hidden]: !open,
              })}
              onClick={onToggleSidebar}
              variant="text"
            >
              <CloseIcon />
            </IconButton>
          </div>

          <List
            component="div"
            disablePadding
          >
            {navMenu && navMenu.map((menu, index) => (<ListItem
              activeClassName={classes.activeListItem}
              className={classes.listItem}
              component={NavLink}
              to={menu.to}
            >
              <ListItemIcon className={classes.listItemIcon}>
                {menu.icon}
              </ListItemIcon>
              {open ? <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={menu.name}
              /> : null}
            </ListItem>)
            )}
          </List>
          <Divider className={classes.listDivider} />
          <List component="div"
            disablePadding>

          </List>
        </div>
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
