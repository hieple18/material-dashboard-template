import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, Typography } from '@material-ui/core';

import AlgoliaPlaces from 'algolia-places-react'

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4),
    display: 'flex',
    flexWrap: 'wrap',
  },
  searchbox: {
    boxShadow: 'none',
    borderRadius: 24,
    border: '1px rgba(0, 0, 0, 0.12) solid',
    height: 48
  }
});

class Map extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h1">This is a Map Page</Typography>
        <AlgoliaPlaces
          className={classes.searchbox}
          placeholder='Search Place'

          options={{
          }}

          onChange={({ query, rawAnswer, suggestion, suggestionIndex }) =>
            console.log('suggestion', suggestion.latlng)}

          onSuggestions={({ rawAnswer, query, suggestions }) =>
            console.log('Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.')}

          onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) =>
            console.log('Fired when arrows keys are used to navigate suggestions.')}

          onClear={() =>
            console.log('Fired when the input is cleared.')}

          onLimit={({ message }) =>
            console.log('Fired when you reached your current rate limit.')}

          onError={({ message }) =>
            console.log('Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.')}
        />
      </div>
    );
  }
}

Map.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Map);
