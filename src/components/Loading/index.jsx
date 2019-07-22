import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Component styles
const styles = theme => ({
    shading: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(255, 255, 255, .3)',
    },
    icon: {
        position: 'absolute',
        fontSize: 20,
        top: 'calc(45% - 10px)',
        left: 'calc(50% - 10px)'
    }
});

const Loading = ({classes}) => (
  <div className={classes.shading}>
    <CircularProgress className={classes.icon} />
  </div>
);

export default withStyles(styles)(Loading);