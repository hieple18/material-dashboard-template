import React, { Component, Fragment } from 'react';

// Externals
import classNames from 'classnames';

// // CLSX utility for constructing `className` 
// import clsx from 'clsx';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

import { withRouter } from "react-router";
import { withTranslation } from 'react-i18next';

// Material helpers
import {
  withStyles,
  withWidth,
  Breadcrumbs,
  Link,
  Typography,
} from '@material-ui/core';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import {
  FileCopyOutlined as FileCopyIcon,
  Save as SaveIcon,
  Print as PrintIcon,
  Share as ShareIcon,
  Delete as DeleteIcon,
  NavigateNext as NavigateNextIcon,
  LanguageOutlined as LanguageIcon
} from '@material-ui/icons';

// Custom components
import { Sidebar, Topbar, Footer } from './components';

// Component styles
import styles from './styles';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    const isMobile = ['xs'].includes(props.width);
    const isTablet = ['sm'].includes(props.width);

    this.state = {
      isOpen: !isMobile && !isTablet,
      direction: 'up',
      open: false,
      hidden: isMobile,
    };
  }

  handleSpeedDialClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleSpeedDialDirectionChange = (event, value) => {
    this.setState({
      direction: value,
    });
  };

  handleSpeedDialHiddenChange = (event, hidden) => {
    this.setState(state => ({
      hidden,
      // hidden implies !open
      open: hidden ? false : state.open,
    }));
  };

  handleSpeedDialClose = () => {
    this.setState({ open: false });
  };

  handleSpeedDialOpen = () => {
    this.setState({ open: true });
  };


  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleToggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleClick = (event) => {
    event.preventDefault();
    alert('You clicked a breadcrumb.');
  }

  render() {
    const { classes, width, title, children, match, t } = this.props;
    const { isOpen } = this.state;

    const isMobile = ['xs'].includes(width);
    const isTablet = ['sm'].includes(width);
    const actions = [
      { icon: <PrintIcon />, name: 'Print' },
      { icon: <ShareIcon />, name: 'Share' },
      { icon: <LanguageIcon />, name: 'Language'}
    ];
    const { direction, hidden, open } = this.state;

    return (
      <div className={classes.wrapper}>
        <Fragment>
          <Topbar
            className={classNames(classes.topbar, {
              [classes.topbarShift]: isOpen && !isMobile && !isTablet,
            })}
            isMobile={isMobile}
            isSidebarOpen={isOpen}
            onToggleSidebar={this.handleToggleOpen}
          />

          <Sidebar
            anchor="left"
            onClose={this.handleClose}
            open={isOpen}
            isHidden={(isMobile || isTablet)}
            onToggleSidebar={this.handleToggleOpen} />

          <main
            className={classNames(classes.viewContainer, {
              [classes.contentShift]: isOpen && !isMobile && !isTablet,
              [classes.narrowContent]: !isOpen && !isMobile && !isTablet
            })}
          >
            <div className={classes.breadcrumb}>
              <Breadcrumbs className={classes.breadcrumbText} separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumb">
                <Typography className={classes.breadcrumbText}>{t('dashboard')}</Typography>
                <Typography className={classes.breadcrumbPrimaryText}>{t(match.params.view)}</Typography>
              </Breadcrumbs>
            </div>
            <div className={classes.content}>
              {children}
            </div>
            <Footer />
          </main>
        </Fragment>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          hidden={isMobile}
          icon={<SpeedDialIcon />}
          onBlur={this.handleSpeedDialClose}
          onClick={this.handleSpeedDialClick}
          onClose={this.handleSpeedDialClose}
          onFocus={this.handleSpeedDialOpen}
          onMouseEnter={this.handleSpeedDialOpen}
          onMouseLeave={this.handleSpeedDialClose}
          open={open}
          direction={direction}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={this.handleSpeedDialClick}
            />
          ))}
        </SpeedDial>
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  width: PropTypes.string.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(withRouter(withTranslation('default')(Dashboard)));
