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
  Select,
  OutlinedInput, FormGroup,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormLabel
} from '@material-ui/core';

import { Rater as CustomRater } from 'components/Rating';

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
            <div>
              <Typography variant="h3">Basic Input</Typography>
              <FormControl className={classes.margin}>
              <CustomInput label="Basic Input"/>
              </FormControl>
            </div>
            <div>
              <Typography variant="h3">Tag Selection</Typography>
              <FormControl className={classes.margin}>
                <ChipInput label="Tags" defaultValue={["default tag 1", "default tag 2"]} helperText="For more detail, see https://github.com/TeamWertarbyte/material-ui-chip-input." />
              </FormControl>
            </div>
            <div>
              <Typography variant="h3">Digital Input</Typography>
              <FormControl className={classes.margin}>
                <DigitalInput shrink={true} label="Digital Input" />
              </FormControl>
            </div>
            <div>
              <Typography variant="h3">Paragraph</Typography>
              <FormControl className={classes.margin}>
                <TextField
                  id="filled-textarea"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </FormControl>
            </div>
            <div>
              <Typography variant="h3">Datetime</Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Typography variant="h3">Radio Buttons</Typography>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  name="gender1"
                // className={classes.group}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="(Disabled option)"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <Typography variant="h3">Checkboxes</Typography>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox value="gilad" />}
                    label="Gilad Gray"
                  />
                  <FormControlLabel
                    control={<Checkbox value="jason" />}
                    label="Jason Killian"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox value="antoine" />
                    }
                    label="Antoine Llorca"
                  />
                </FormGroup>
              </FormControl>
            </div>

            <div>
              <Typography variant="h3">Dropdown</Typography>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Age
                </InputLabel>
                <Select
                  native
                  // onChange={handleChange('age')}
                  input={
                    <OutlinedInput name="age" labelWidth={90} id="outlined-age-native-simple" />
                  }
                >
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>

            </div>
            <div>
              <Typography variant="h3">Rating</Typography>
              <div>
                <CustomRater rating={4} total={5} />
                {/* <Rater rating={4} total={5} >
                  <RatingIcons.Star />
                </Rater> */}
              </div>
              <div>
              {/* <Rater rating={4} total={5} interactive={true}>
                <RatingIcons.Heart />
              </Rater> */}
              </div>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div>
              <Typography variant="h3">File Upload</Typography>
            </div>

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
