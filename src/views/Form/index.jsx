import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';

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
// TODO: use form state???

import {
  ChipInput,
  DigitalInput,
  CustomInput
} from 'components'

// Component styles
import styles from './styles';

class Form extends Component {

  render() {
    const { classes, t } = this.props;
    const _phonemask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    const _datemask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]

    return (
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <div className={classes.wrapper}>
              <Typography variant="h3">{t('basic-input')}</Typography>
              <div className={classes.margin}>
                <CustomInput label="Masked Input" placeholder="(879) 897-8775" mask={_phonemask} type="formatted" />
                <CustomInput label="Basic Input" type="email" />
              </div>
            </div>
            {/* <div className={classes.wrapper}>
              <Typography variant="h3">Tag Selection</Typography>
              <div className={classes.margin}>
                <ChipInput label="Tags" defaultValue={["default tag 1", "default tag 2"]} helperText="For more detail, see https://github.com/TeamWertarbyte/material-ui-chip-input." />
              </div>
            </div> */}
            <div className={classes.wrapper}>
              <Typography variant="h3">Digital Input</Typography>
              <div className={classes.margin}>
              <CustomInput label="Digital Input" type="numeric" />
            </div>
            </div>
            <div className={classes.wrapper}>
              <Typography variant="h3">Paragraph</Typography>
              <div className={classes.margin}>
              <CustomInput label="Paragraph" placeholder="Enter some text..." multiline rows={5} autosize />
            </div>
            </div>
            <div className={classes.wrapper}>
              <Typography variant="h3">Datetime</Typography>
              <div className={classes.margin}>
              <CustomInput label="Date Text" placeholder="09/08/1996" mask={_datemask} type="formatted" />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.wrapper}>
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
            <div className={classes.wrapper}>
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

          <Grid item xs={12} sm={6}>
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

export default withStyles(styles)(withTranslation('default')(Form));
