import React from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles, InputLabel, InputBase, FormControl } from '@material-ui/core';

// Chip Input
import ChipInput from 'material-ui-chip-input'

import { fade, makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { ThemeProvider } from '@material-ui/styles';

// Component styles
const styles = theme => {
    return {
        root: {
            borderRadius: '4px'
        },
        squared: {
            borderRadius: 0
        },
        outlined: {
            border: `1px solid ${theme.palette.border}`
        }
    };
};

const Input = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 10,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 18,
        width: 'auto',
        padding: '12px 16px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

const theme = (theme) => createMuiTheme({
    overrides: {
        ChipInput: {
            chipContainer: {
            }
            // inputRoot
            // input
            // chipContainer
            // label
            // helperText
            // chip
        },
        MuiInputBase: {
            root: {
                backgroundColor: '#FFF',
            }
        },
        MuiFormLabel: {
            root: {
                fontSize: 14,

            }
        },
        WAMuiChipInput: {
            inputRoot: {
                display: 'flex',
                padding: "12px 16px"
            },
            chip: {
                margin: '0 4px'
            },
            input: {
                padding: '0 8px',
                fontSize: 18
            }
        },
        MuiChip: {
            root: {
                // backgroundColor: theme.palette.minimal.beige
            }
        }
    }
});

const Label = withStyles(theme => ({
    root: {
        fontSize: 18,
        color: '#7C88A1'
    }
}))(InputLabel);

const CustomTextField = props => {
    const { classes, className, outlined, squared, defaultValue, label, shrink, children, handleChange, ...rest } = props;

    const rootClassName = classNames(
        {
            [classes.root]: true,
            [classes.squared]: squared,
            [classes.outlined]: outlined
        },
        className
    );

    return (
        <FormControl>
            <Label shrink={shrink} htmlFor="customized-input" >{label}</Label>
            <Input id="customized-input" defaultValue={defaultValue} />
        </FormControl>
    );
}

CustomTextField.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    // classes: PropTypes.object.isRequired,
    elevation: PropTypes.number,
    outlined: PropTypes.bool,
    squared: PropTypes.bool,
    handleChange: PropTypes.func,
    defaultValue: PropTypes.string,
    shrink: PropTypes.bool
};

CustomTextField.defaultProps = {
    squared: false,
    outlined: true,
    elevation: 0,
    defaultValue: "",
    shrink: true
};

export default withStyles(styles)(CustomTextField);
