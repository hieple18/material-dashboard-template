import React from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles, InputLabel, Input } from '@material-ui/core';

// Chip Input
import ChipInput from 'material-ui-chip-input'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

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

const Label = withStyles(theme => ({
    root: {
        fontSize: 18,
        color: '#7C88A1'
    }
}))(InputLabel);

const _handleChange = (chips) => {
    console.log(chips)
}

const CustomChipInput = props => {
    const { classes, className, outlined, squared, defaultValue, label, shrink, children, handleChange, ...rest } = props;

    const rootClassName = classNames(
        {
            [classes.root]: true,
            [classes.squared]: squared,
            [classes.outlined]: outlined
        },
        className
    );
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
                },
                helperText: {
                    marginBottom: 'unset'
                }
            },
            MuiChip: {
                root: {
                    // backgroundColor: theme.palette.minimal.beige
                }
            },
        }
    });

    return (
        <div>
            <Label shrink={shrink} htmlFor="chip-input">{label}</Label>
            <MuiThemeProvider theme={theme}>
                <ChipInput
                    id="chip-input"
                    label={label}
                    variant="outlined"
                    defaultValue={defaultValue}
                    onChange={(chips) => handleChange(chips)}
                    // newChipKeyCodes={[13, 188]}
                    {...rest}
                />
            </MuiThemeProvider>
        </div>
    );
};

CustomChipInput.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    // classes: PropTypes.object.isRequired,
    elevation: PropTypes.number,
    outlined: PropTypes.bool,
    squared: PropTypes.bool,
    handleChange: PropTypes.func,
    defaultValue: PropTypes.array,
    // newChipKeyCodes: PropTypes.arrayOf
};

CustomChipInput.defaultProps = {
    squared: false,
    outlined: true,
    elevation: 0,
    defaultValue: [],
    handleChange: _handleChange,
    shrink: true
};

export default withStyles(styles)(CustomChipInput);
