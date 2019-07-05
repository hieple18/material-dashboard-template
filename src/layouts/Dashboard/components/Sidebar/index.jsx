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
  Collapse,
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
  HomeOutlined as HomeIcon
} from '@material-ui/icons';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

// Component styles
import styles from './styles';

const navMenu = [
  {
    id: '1',
    name: 'Monitor',
    to: '/dashboard/monitor',
    icon: <DashboardIcon />,
    // subitems: [
    //   {
    //     id: '1A',
    //     name: 'AAA',
    //     to: '/monitor',
    //   }
    // ]
  },
  {
    id: '2',
    to: '/dashboard/users',
    name: 'Users',
    icon: <PeopleIcon />

  },
  {
    id: '3',
    to: '/dashboard/products',
    name: 'Products',
    icon: <ShoppingBasketIcon />
  },
  {
    id: '4',
    to: '/dashboard/typography',
    name: 'Typography',
    icon: <TextFieldsIcon />
  },
  {
    id: '5',
    to: '/dashboard/icons',
    name: 'Icons',
    icon: <ImageIcon />
  },
  {
    id: '6',
    to: '/dashboard/account',
    name: 'Account',
    icon: <AccountBoxIcon />
  },
  {
    id: '7',
    to: '/dashboard/settings',
    name: 'Settings',
    icon: <SettingsIcon />
  },
  {
    id: '8',
    to: '/dashboard/underDevelopment',
    name: 'UnderDevelopment',
    icon: <InfoIcon />
  }
]

class NestedList extends Component {
  state = {};
  handleClick = e => {
    this.setState({ [e]: !this.state[e] });
  };

  render() {
    const { classes, open, data } = this.props;

    return (
      <List
        component="div"
        disablePadding
      >
        {data && data.map((item) => {
          return (
            <div key={item.id}>
              {item.subitems == null ?
                <ListItem
                  activeClassName={classes.activeListItem}
                  className={classes.listItem}
                  component={NavLink}
                  to={item.to ? item.to : ''}>
                  <ListItemIcon className={classes.listItemIcon}>
                    {item.icon}
                  </ListItemIcon>
                  {open ? <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={item.name}
                  /> : null}
                </ListItem> :
                <div key={item.id}>
                  <ListItem
                    activeClassName={classes.activeListItem}
                    className={classes.listItem}
                    button
                    selected={this.state[item.name]}
                    onClick={this.handleClick.bind(
                      this,
                      item.name
                    )}>
                    <ListItemIcon className={classes.listItemIcon}>
                      {item.icon}
                    </ListItemIcon>
                    {open ? <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary={item.name}
                    /> : null}
                    {this.state[item.name] ? (<ExpandLess className={classNames(classes.listItemText, { [classes.hidden]: !open })} />) : (<ExpandMore className={classNames(classes.listItemText, { [classes.hidden]: !open })} />)}
                  </ListItem>
                  <Collapse
                    // key={item.id}
                    component="li"
                    in={this.state[item.name]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List disablePadding>
                      {item.subitems.map(
                        sitem => {
                          return (
                            <ListItem
                              activeClassName={classes.activeListSubItem}
                              className={classes.listSubItem}
                              component={NavLink}
                              to={sitem.to ? sitem.to : ''}>
                              <ListItemText
                                classes={{ primary: classes.listItemText }}
                                primary={sitem.name}
                              />
                            </ListItem>
                          );
                        }
                      )}
                    </List>
                  </Collapse>
                </div>
              }
            </div>
          );
        }
        )}
      </List>
    );
  }
}

class Sidebar extends Component {
  render() {
    const { classes, className, onClose, open, anchor, isHidden, onToggleSidebar } = this.props;

    // const rootClassName = classNames(classes.root, className);

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
        variant={isHidden ? 'temporary' : 'permanent'}
      >
        <div className={classes.sidebar}>
          <div className={classes.toolbar}>
            <div className={classes.logoWrapper}>
              <Link
                className={classes.logoLink}
                to="/dashboard/monitor"
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

          <NestedList data={navMenu} classes={classes} open={open} />
          <Divider className={classes.listDivider} />
          <List component="div"
            disablePadding>
              <ListItem
              activeClassName={classes.activeListItem}
              className={classes.listItem}
              component={NavLink}
              to="/dashboard/about"
            >
              <ListItemIcon className={classes.listItemIcon}>
                <InfoIcon />
              </ListItemIcon>
              {open ? <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="About"
              /> : null}
            </ListItem>
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
