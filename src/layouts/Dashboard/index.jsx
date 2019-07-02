import React, { Component, Fragment } from 'react';

// Externals
import classNames from 'classnames';

// // CLSX utility for constructing `className` 
// import clsx from 'clsx';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, withWidth, Breadcrumbs, Link, Typography } from '@material-ui/core';

import {
  NavigateNext as NavigateNextIcon
} from '@material-ui/icons';

// Custom components
import { Sidebar, Topbar, Footer } from './components';

// Component styles
import styles from './styles';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    const isMobile = ['xs', 'sm'].includes(props.width);

    this.state = {
      isOpen: !isMobile
    };
  }

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
    const { classes, width, title, children } = this.props;
    const { isOpen } = this.state;

    const isMobile = ['xs', 'sm'].includes(width);

    return (
      <Fragment>
        <Topbar
          className={classNames(classes.topbar, {
            [classes.topbarShift]: isOpen && !isMobile,
          })}
          isSidebarOpen={isOpen}
          onToggleSidebar={this.handleToggleOpen}
          title={title}
        />

        <Sidebar
          anchor="left"
          onClose={this.handleClose}
          open={isOpen}
          isMobile={isMobile}
          onToggleSidebar={this.handleToggleOpen} />

        <main
          className={classNames(classes.viewContainer, {
            [classes.contentShift]: isOpen && !isMobile,
            [classes.narrowContent]: !isOpen && !isMobile
          })}
        >
          <div className={classes.breadcrumb}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumb">
              <Link color="inherit" href="/" onClick={this.handleClick}>
                Dashboard
            </Link>
              <Typography className={classes.breadcrumbText} color="textPrimary">Dashboard</Typography>
            </Breadcrumbs>
          </div>
          <div className={classes.content}>
            {children}
          </div>
          <Footer />
        </main>
      </Fragment>
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
)(Dashboard);
