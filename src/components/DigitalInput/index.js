import React from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles, InputLabel, TextField, FormControl } from '@material-ui/core';

// Chip Input
import ChipInput from 'material-ui-chip-input'

import { fade, makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { ThemeProvider } from '@material-ui/styles';


const theme = (theme) => createMuiTheme({
    overrides: {
        MuiInputBase: {
            input: {
                borderRadius: 10,
                position: 'relative',
                backgroundColor: theme.palette.common.white,
                border: '1px solid #ced4da',
                fontSize: 18,
                width: 'auto',
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

            }
        },
        MuiOutlinedInput: {
            notchedOutline: {
                '& Muifocused': {
                    border: 'none'
                },
                border: 'none'
            },
            input: {
                padding: '12px 16px',
            }
        }
    }
});

// Component styles
const styles = theme => {
    return {
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
        },
        input: {
            borderRadius: 10,
            position: 'relative',
            backgroundColor: 'theme.palette.common.white',
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
    };
};

const Input = withStyles(theme => ({
}))(TextField);

const Label = withStyles(theme => ({
    root: {
        fontSize: 18,
        color: '#7C88A1'
    }
}))(InputLabel);

const DigitalInput = props => {
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
        <MuiThemeProvider theme={theme}>
        <FormControl
        className={classes.root}>
            <Label htmlFor="customized-digits">{label}</Label>
            {/* <Input defaultValue={defaultValue}  /> */}
            <TextField
                id="customized-digits"
            //   label={<Label shrink={shrink} htmlFor="customized-digits">{label}</Label>}
                InputLabelProps={{ shrink: shrink }} 
              type="number"
              className={classes.input}

              defaultValue={defaultValue} 
              className={classes.textField}
              variant="outlined"
            />
        </FormControl>
        </MuiThemeProvider>
    );
}

DigitalInput.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    // classes: PropTypes.object.isRequired,
    elevation: PropTypes.number,
    outlined: PropTypes.bool,
    squared: PropTypes.bool,
    handleChange: PropTypes.func,
    defaultValue: PropTypes.number,
    shrink: PropTypes.bool
};

DigitalInput.defaultProps = {
    squared: false,
    outlined: true,
    elevation: 0,
    defaultValue: 0,
    shrink: true
};

export default withStyles(styles)(DigitalInput);
