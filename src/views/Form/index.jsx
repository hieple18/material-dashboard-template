import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Grid,
  Typography,
  InputBase,
  FormControl,
  InputLabel,
  TextField,
} from '@material-ui/core';

import { useFormState } from 'react-use-form-state';

import {
  ChipInput,
  TextField as CustomInput,
  DigitalInput
} from 'components'

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4),
    display: 'flex',
    flexWrap: 'wrap',
  },
  content: {
    marginTop: '150px',
    textAlign: 'center'
  },
  image: {
    display: 'inline-block',
    marginTop: '50px',
    maxWidth: '100%',
    width: '554px'
  },
  margin: {
    margin: theme.spacing(1),
  },
});

class Form extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <FormControl className={classes.margin}>
              <CustomInput label="Basic Input" />
            </FormControl>
            <FormControl className={classes.margin}>
              <ChipInput label="Tags" defaultValue={["default tag 1", "default tag 2"]} helperText="For more detail, see https://github.com/TeamWertarbyte/material-ui-chip-input." />
            </FormControl>
            <FormControl className={classes.margin}>
              <DigitalInput shrink={true} label="Basic Input" />
            </FormControl>

          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
