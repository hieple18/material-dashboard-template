import React, { Component, Fragment, Children } from 'react';
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
    Popover,
    Paper,
} from '@material-ui/core';

const StyledPopover = withStyles({
    paper: {
        paddingTop: 15,
        background: 'transparent',
        boxShadow: '10px 10px 18px -7px rgba(0,0,0,0.14)',
        top: '45px!important'
    },
})(Popover);

const StyledPaper = withStyles({
    root: {
        border: '1px solid #d9d9d9'
    }
})(Paper);

const styles = theme => ({
    wrapper: {
        background: 'transparent',
        '&:before': {
            position: 'absolute',
            backgroundColor: '#FFF',
            width: 16,
            height: 16,
            content: "''",
            top: 7,
            left: 'calc(100% - 29px)',
            transform: 'rotate(45deg)',
            borderTop: '1px solid #d9d9d9',
            borderLeft: '1px solid #d9d9d9',

        }
    },
});

class CustomPopover extends Component {
    render() {
        const { classes, className, anchorEl, open, anchorOrigin, transformOrigin, children, onClose } = this.props;

        const rootClassName = classNames(classes.root, className);

        return (
            <StyledPopover open={open} className={rootClassName} 
                onClose={onClose}
                anchorEl={anchorEl}
                anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}>
                <div className={classes.wrapper}>
                    <StyledPaper>
                        {children}
                    </StyledPaper>
                </div>
            </StyledPopover>
        )
    }
}
CustomPopover.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func
};

CustomPopover.defaultProps = {
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
    },
    transformOrigin: {
        vertical: 'top',
        horizontal: 'right',
    }
};

export default withStyles(styles)(CustomPopover);
