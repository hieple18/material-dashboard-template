import React, { Component, Fragment } from 'react';

// Externals
import classNames from 'classnames';

// // CLSX utility for constructing `className` 
// import clsx from 'clsx';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, withWidth } from '@material-ui/core';

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

  render() {
    const { classes, width, title, children } = this.props;
    const { isOpen } = this.state;

    const isMobile = ['xs', 'sm'].includes(width);
    const isShifted = isOpen && !isMobile;
    // const shiftContent = isOpen && !isMobile;

    return (
      <Fragment>
        <Topbar
          className={classNames(classes.topbar, {
            [classes.topbarShift]: isOpen && !isMobile
          })}
          isSidebarOpen={isOpen}
          onToggleSidebar={this.handleToggleOpen}
          title={title}
        />
        <Sidebar
          anchor="left"
          onClose={this.handleClose}
          open={isOpen}
          isMobile={isMobile} />
          
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: isOpen && !isMobile,
            [classes.narrowContent]: !isOpen && !isMobile
          })}
        >
          {children}
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
