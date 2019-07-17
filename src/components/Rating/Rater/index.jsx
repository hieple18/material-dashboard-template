import React, { Component } from 'react'
import Star from './../Icons/Star'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { Typography } from '@material-ui/core';

// Externals
import PropTypes from 'prop-types';

class CustomRater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.rating || 0,
            total: this.props.total || 5,
        }
    }
    onRate(rating) {
        this.setState = { rating: rating }
    }
    render() {
        const { onRate, children, ...rest } = this.props;
        return (
            <div>
                <Rater
                    // onRate={onRate ? onRate : this.onRate(this.props.rating)}
                    {...rest} >
                    {children ? children : <Star />}
                </Rater>
                {/* <Typography>
                    {this.state.rating}
                </Typography> */}
            </div>
        );
    }
}

CustomRater.propTypes = {
    children: PropTypes.node,
    onRate: PropTypes.func
}

CustomRater.defaultProps = {
    children: null,
}

export default CustomRater;