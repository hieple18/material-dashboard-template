import React, { Component } from 'react';

import {
    Background
} from 'components';

import {
    Paper,
    Typography,
    Grid,
    Button,
    Fab,
    ButtonGroup
} from '@material-ui/core';

// Material helpers
import { withStyles } from '@material-ui/core';

import { Link } from 'react-router-dom';

import classNames from 'classnames';

// Component styles
import styles from './styles';

class Home extends Component {

    render() {
        const { classes, className, ...rest } = this.props;

        const isMobile = ['xs', 'sm'].includes(this.props.width);

        return (
            <Background width={window.innerWidth} height={window.innerHeight}>
                <Paper className={classNames(classes.root, 
                    { [classes.floatingPage]: !isMobile, 
                        // [classes.fullPage]: isMobile
                    })}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} className={classes.menuBar}>
                            <div className={classes.menu}>
                                <Button size="large" className={classes.menuButton}>
                                    Docs
                                    </Button>
                                <Button size="large" className={classes.menuButton}>
                                    About
                                    </Button>
                                <ButtonGroup size="large" aria-label="Outlined button group">
                                    <Button>
                                        Sign Up
                                    </Button>
                                    <Button className={classes.filledBg}>
                                        Log In
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </Grid>
                        <Grid item xs={12} className={classes.leftContainer}>
                            <Typography className={classes.bigText} component="p">
                                Spaceship
                            </Typography>
                            <Typography className={classes.mediumText} component="p">
                                Invest Your Super in the Future
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
        );
    }
}


export default withStyles(styles)(Home);
