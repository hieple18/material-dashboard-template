import React from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Paper } from '@material-ui/core';

// Component styles
const styles = theme => {
  return {
    root: {
      borderRadius: "8px",
      // boxShadow: "0px 10px 39px 0px rgba(68,0,58, 0.5)",
      // backgroundColor: "#DA6287",
    },
    squared: {
      borderRadius: 0
    },
    outlined: {
      border: "none"
      // border: `1px solid ${theme.palette.border}`
    }
  };
};

const CustomPaper = props => {
  const { classes, className, outlined, squared, children, ...rest } = props;

  const rootClassName = classNames(
    {
      [classes.root]: true,
      [classes.squared]: squared,
      [classes.outlined]: outlined
    },
    className
  );

  return (
    <Paper
      {...rest}
      className={rootClassName}
    >
      {children}
    </Paper>
  );
};

CustomPaper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  elevation: PropTypes.number,
  outlined: PropTypes.bool,
  squared: PropTypes.bool
};

CustomPaper.defaultProps = {
  squared: false,
  outlined: true,
  elevation: 0
};

export default withStyles(styles)(CustomPaper);
