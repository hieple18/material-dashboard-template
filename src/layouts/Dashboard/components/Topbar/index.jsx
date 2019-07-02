import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Badge,
  IconButton,
  Popover,
  Toolbar,
  Avatar,
  Typography,
  Button
} from '@material-ui/core';

// Material icons
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  NotificationsOutlined as NotificationsIcon,
  Input as InputIcon,
  Person as PersonIcon,
  Search as SearchIcon
} from '@material-ui/icons';

// Shared services
import { getNotifications } from 'services/notification';

// Custom components
import { NotificationList } from './components';

// Component styles
import styles from './styles';

class Topbar extends Component {
  signal = true;

  state = {
    notifications: [],
    notificationsLimit: 4,
    notificationsCount: 0,
    notificationsEl: null,
    profileEl: null
  };

  async getNotifications() {
    try {
      const { notificationsLimit } = this.state;

      const { notifications, notificationsCount } = await getNotifications(
        notificationsLimit
      );

      if (this.signal) {
        this.setState({
          notifications,
          notificationsCount
        });
      }
    } catch (error) {
      return;
    }
  }

  componentDidMount() {
    this.signal = true;
    this.getNotifications();
  }

  componentWillUnmount() {
    this.signal = false;
  }

  handleSignOut = () => {
    const { history } = this.props;

    localStorage.setItem('isAuthenticated', false);
    history.push('/sign-in');
  };

  handleShowNotifications = event => {
    this.setState({
      notificationsEl: event.currentTarget
    });
  };

  handleCloseNotifications = () => {
    this.setState({
      notificationsEl: null,
    });
  };

  handleShowProfile = event => {
    this.setState({
      profileEl: event.currentTarget
    });
  };

  handleCloseProfile = () => {
    this.setState({
      profileEl: null
    })
  }

  render() {
    const {
      classes,
      className,
      title,
      isSidebarOpen,
      onToggleSidebar
    } = this.props;
    const { notifications, notificationsCount, notificationsEl, profileEl } = this.state;

    const rootClassName = classNames(classes.root, className);
    const showNotifications = Boolean(notificationsEl);
    const showProfile = Boolean(profileEl);

    return (
      <Fragment>
        <div className={rootClassName}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.menuButton}
              onClick={onToggleSidebar}
              variant="text"
            >
              {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Typography
              className={classes.title}
              variant="h4"
            >
              {title}
            </Typography>

            <div className={classes.leftButtons}>
              <IconButton
              >
                <SearchIcon />
              </IconButton>
              <IconButton
                // className={classes.notificationsButton}
                onClick={this.handleShowNotifications}
              >
                <Badge
                  badgeContent={notificationsCount}
                  color="primary"
                  variant="dot"
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                className={classes.signOutButton}
                onClick={this.handleShowProfile}
              >
                <PersonIcon />
              </IconButton>
              {/* <IconButton
              className={classes.signOutButton}
              onClick={this.handleSignOut}
            >
              <InputIcon />
            </IconButton> */}
            </div>

          </Toolbar>
        </div>

        <Popover
          anchorEl={notificationsEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          onClose={this.handleCloseNotifications}
          open={showNotifications}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <NotificationList
            notifications={notifications}
            onSelect={this.handleCloseNotifications}
          />
        </Popover>

        <Popover
          anchorEl={profileEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          onClose={this.handleCloseProfile}
          open={showProfile}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <div>
            <Avatar
              className={classes.avatar}
              src="/images/avatars/avatar_1.png"
            />

            <Button
              color="primary"
              variant="outlined"
              onClick={this.handleSignOut}
            >
              Sign Out
          </Button>
          </div>
        </Popover>
      </Fragment>
    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  title: PropTypes.string
};

Topbar.defaultProps = {
  onToggleSidebar: () => { }
};

export default compose(
  withRouter,
  withStyles(styles)
)(Topbar);
