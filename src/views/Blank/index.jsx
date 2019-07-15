import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4),
    display: 'flex',
    flexWrap: 'wrap',
  }
});

class Blank extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
          <h1>This is a Blank Page</h1>
      </div>
    );
  }
}

Blank.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Blank);
