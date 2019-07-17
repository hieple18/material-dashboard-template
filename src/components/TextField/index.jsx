import React from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles, InputLabel, InputBase, FormControl, TextField, Typography } from '@material-ui/core';

// Chip Input
// import ChipInput from 'material-ui-chip-input'

import { fade, makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { ThemeProvider } from '@material-ui/styles';

// Component styles
const styles = theme => {
    return {
        
        input: {
            '&$numeric': {
                width: 128,
            }
        },
        root: {
            // borderRadius: '4px',
            // display: 'flex',
            // padding: "12px 16px",
            // width: '100%'
        },
        squared: {
            borderRadius: 0
        },
        outlined: {
            border: `1px solid ${theme.palette.border}`
        },
        label: {
            fontSize: 18,
            color: '#7C88A1'
        }
    };
};

// const Input = withStyles(theme => ({
//     root: {
//         'label + &': {
//             marginTop: theme.spacing(3),
//         },
//     },
//     input: {
//         borderRadius: 10,
//         position: 'relative',
//         backgroundColor: theme.palette.common.white,
//         border: '1px solid #ced4da',
//         fontSize: 18,
//         width: 'auto',
//         padding: '12px 16px',
//         transition: theme.transitions.create(['border-color', 'box-shadow']),
//         // Use the system font instead of the default Roboto font.
//         fontFamily: [
//             '-apple-system',
//             'BlinkMacSystemFont',
//             '"Segoe UI"',
//             'Roboto',
//             '"Helvetica Neue"',
//             'Arial',
//             'sans-serif',
//             '"Apple Color Emoji"',
//             '"Segoe UI Emoji"',
//             '"Segoe UI Symbol"',
//         ].join(','),
//         '&:focus': {
//             boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//             borderColor: theme.palette.primary.main,
//         },
//         // textField: {
//         //     marginLeft: theme.spacing(1),
//         //     marginRight: theme.spacing(1),
//         //   },
//         //   dense: {
//         //     marginTop: theme.spacing(2),
//         // },
//     },
// }))(InputBase);

const theme = (theme) => createMuiTheme({
    overrides: {
        MuiOutlinedInput: {
            multiline: {
                padding: "12px 16px",
                backgroundColor: '#FFF'
            },
            inputMarginDense: {
                padding: "12px 16px",
                paddingTop: 12,
                paddingBottom: 12
            },  
        },
        MuiInputBase: {
            input: {
                backgroundColor: '#FFF'
            }
        },
        MuiFormControl: {
            marginDense: {
                marginTop: 4
            }
        },
    }
});

const Label = withStyles(theme => ({
    root: {
        fontSize: 16,
        color: '#7C88A1'
    }
}))(InputLabel);

// TODO: multiline and button propeperty

const CustomTextField = props => {
    const { classes, className, outlined, squared, defaultValue, label, shrink, multiline, numeric, button, children, handleChange, ...rest } = props;

    const rootClassName = classNames(
        {
            [classes.root]: true,
            [classes.squared]: squared,
            [classes.outlined]: outlined
        },
        className
    );
    const numericInput = classNames(
        classes.input,
        classes[`${numeric ? 'numeric' : 'input'}`],
      );

    return (
            <MuiThemeProvider theme={theme}>
        <FormControl className={classes.root}>
            <Typography className={classes.label}>{label}</Typography>

                <TextField
                    type={numeric ? "number" : "text"}
                    variant="outlined"
                    margin="dense"
                    className={numericInput}
                    multiline={multiline ? true : false}
                />
        </FormControl>
            </MuiThemeProvider>
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
    shrink: PropTypes.bool,
    // multiline: PropTypes.bool,
    button: PropTypes.node,
    numeric: PropTypes.bool
};

CustomTextField.defaultProps = {
    squared: false,
    outlined: true,
    elevation: 0,
    defaultValue: "",
    shrink: true,
    // multiline: false,
    button: null,
    numeric: false
};

export default withStyles(styles)(CustomTextField);
