import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';
import { withTranslation } from "react-i18next";

// Material components
import {
  Badge,
  IconButton,
  Popover,
  Toolbar,
  Avatar,
  Button,
  ClickAwayListener,
  MenuItem,
  MenuList,
  TextField, InputAdornment,
  InputBase
} from '@material-ui/core';

import avatarUrl from 'assets/images/avata.jpg';

// Material icons
import {
  Menu as MenuIcon,
  NotificationsOutlined as NotificationsIcon,
  Person as PersonIcon,
  Search as SearchIcon,
  ExpandMoreOutlined as ExpandIcon,
  StarBorderOutlined as StartIcon,
  LanguageOutlined as LanguageIcon
} from '@material-ui/icons';

// Shared services
import { getNotifications } from 'services/notification';

// Component styles
import styles from './styles';

// Custom components
import { Popover as CustomPopover, NotificationList } from 'components'

// Context
import RouteContext from 'context/RouteContext'

import { Link } from 'react-router-dom';

import { generateLanguage } from 'common/utils'

class Topbar extends Component {
  signal = true;

  // A static variable for Route Context
  static contextType = RouteContext

  state = {
    notifications: [],
    notificationsLimit: 4,
    notificationsCount: 0,
    notificationsEl: null,
    profileEl: null,
    langEl: null,
    dropdownOpen: false,
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
  handleShowLanguage = event => {
    this.setState({
      langEl: event.currentTarget
    });
  };

  handleCloseLanguage = () => {
    this.setState({
      langEl: null,
    });
  };

  handleClickDropDown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  handleClickAway = () => {
    this.setState({
      dropdownOpen: false
    });
  };

  handleChangeLanguage = (lang) => {
    this.handleCloseLanguage();
    if (lang !== this.state.lang) {
      this.props.i18n.changeLanguage(lang);
      this.setState({ lang })
    }
  }

  render() {
    const { t, i18n, classes, className, isSidebarOpen, onToggleSidebar, isMobile } = this.props;
    const { language } = i18n;
    const { notifications, notificationsCount, notificationsEl, profileEl, langEl, dropdownOpen } = this.state;

    const rootClassName = classNames(classes.root, className);
    const showNotifications = Boolean(notificationsEl);
    const showProfile = Boolean(profileEl);
    const showLang = Boolean(langEl);
    const { location } = this.context

    return (
      <Fragment>
        <div className={rootClassName}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classNames(classes.menuButton, {
                [classes.hidden]: isSidebarOpen,
              })}
              onClick={onToggleSidebar}
              variant="text"
            >
              <MenuIcon />
            </IconButton>

            {/* TODO: search function */}
            {!isMobile && <div style={{
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <SearchIcon style={{margin: 16}}/>
                            <InputBase
                              className={classes.margin}
                              placeholder="Search..."
                            />
                          </div>}
            {/* TODO: if isMobile --> leftButtons responsive */}

            {isMobile ?
              <div className={classes.dropdownContainer}>
                <IconButton>
                  <SearchIcon />
                </IconButton>
                <IconButton
                  onClick={this.handleShowLanguage}>
                  <Badge
                    badgeContent={language}
                    color="primary">
                    <LanguageIcon />
                  </Badge>
                </IconButton>
              </div>
              :
              <div className={classes.leftButtons}>
                <IconButton
                  onClick={this.handleShowLanguage}>
                  <Badge
                    badgeContent={language}
                    color="primary">
                    <LanguageIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  onClick={this.handleShowNotifications}>
                  <Badge
                    badgeContent={notificationsCount}
                    color="primary"
                    variant="dot">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  onClick={this.handleShowProfile}>
                  <PersonIcon />
                </IconButton>
              </div>}
          </Toolbar>
        </div>

        <CustomPopover open={showProfile} anchorEl={profileEl}
          onClose={this.handleCloseProfile} className={classes.profile}>
          <Fragment>
            <Avatar
              className={classes.avatar}
              src={avatarUrl}
            >
            </Avatar>
          </Fragment>
        </CustomPopover>

        <CustomPopover open={showNotifications} anchorEl={notificationsEl}
          onClose={this.handleCloseNotifications}>
          <NotificationList
            notifications={notifications}
            onSelect={this.handleCloseNotifications}
          />
        </CustomPopover>
        <CustomPopover open={showLang} anchorEl={langEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}>
          <ClickAwayListener onClickAway={this.handleCloseLanguage}>
            <MenuList>
              <Link to={generateLanguage("en", location)}>
                <MenuItem onClick={() => this.handleChangeLanguage('en')} selected={language === 'en'}>English</MenuItem>
              </Link>
              <Link to={generateLanguage("vi", location)}>
                <MenuItem onClick={() => this.handleChangeLanguage('vi')} selected={language === 'vi'}>Tiếng Việt</MenuItem>
              </Link>
              <Link to={generateLanguage("ja", location)}>
                <MenuItem onClick={() => this.handleChangeLanguage('ja')} selected={language === 'ja'}>日本語</MenuItem>
              </Link>
            </MenuList>
          </ClickAwayListener>
        </CustomPopover>
      </Fragment >
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
)(withTranslation('default')(Topbar));
