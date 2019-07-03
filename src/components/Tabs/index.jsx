import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles, Typography } from '@material-ui/core';

// Material components
import { Tabs, Tab } from '@material-ui/core';

// Component styles
import styles from './styles';

const tabList = [
    {
        id: 1,
        name: 'Tab 1',

    },
    {
        id: 2,
        name: 'Tab 2',
    },
    {
        id: 3,
        name: 'Tab 3',
    }
]

class CustomTabs extends Component {

    handleChange(event, newValue) {
        //setValue(newValue);
    }

    render() {
        const { classes, className, value } = this.props;
        return (
            <div className={classes.root}>
                <Tabs className={classes.indicator} onChange={this.handleChange}>
                    {value && value.map(tab => (
                        <Tab key={tab.id} className={classes.tab} label={tab.name} />
                    ))}
                </Tabs>
            </div>
        );
    }

};

CustomTabs.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    elevation: PropTypes.number,
    outlined: PropTypes.bool,
    squared: PropTypes.bool
};

CustomTabs.defaultProps = {
    value: tabList,
};

export default withStyles(styles)(CustomTabs);