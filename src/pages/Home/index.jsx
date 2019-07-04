import React, { Component } from 'react';

import {
    Background
} from 'components';

import {
    Paper,
    Typography,
    Grid,
    Button
} from '@material-ui/core';

// Material helpers
import { withStyles } from '@material-ui/core';

import { Link } from 'react-router-dom';

// Component styles
import styles from './styles';
import image from 'assets/images/home-foreground.jpg'; 

class Home extends Component {
    render() {
        const { classes, className, ...rest } = this.props;

        return (
            <div>
                <Background width={window.innerWidth} height={window.innerHeight}>
                    <Paper className={classes.root}>
                        <Grid container>
                            <Grid item xs={8} className={classes.leftContainer}>
                                <Typography variant="h1" component="h1">
                                    Trời mưa bong bóng phập phồng
                            </Typography>
                                <Typography component="p">
                                    Paper can be used to build surface or other elements for your application.
                            </Typography>
                            <Link to="/dashboard">
                                <Button color="primary" variant="dashboard" aria-label="Dashboard" className={classes.fab}>
                                        Go to Dashboard
                                </Button>
                            </Link>

                            </Grid>
                        </Grid>
                    </Paper>
                </Background>
            </div>
        );
    }
}


export default withStyles(styles)(Home);
