import React from 'react';
import Grid from '@material-ui/core/Grid';
import Metric from '../Dashboard/Metrics/Metric';

import classes from '../Dashboard/Metrics/MetricList.module.css';

export default function LaunchMetric(props) {
    const launchIcon = require('../images/icons/rocket.svg');
    const planIcon = require('../images/icons/plan.svg');
    return(
        <Grid container direction = "column" spacing = {2}>
            <Grid item lg = {12}>
                <div className = {classes.metricList}>
                    <Metric 
                        icon = {launchIcon}
                        altLogo = {'launch-logo'}
                        title = {'Launches Executed'}
                        number = {props.finishedLaunchLength}
                        refresh = {props.refreshLaunch}
                    ></Metric>
                </div>
            </Grid>
            <Grid item lg = {12}>
                <div className = {classes.metricList}>
                    <Metric 
                        icon = {planIcon}
                        altLogo = {'pending-launches'}
                        title = {'Upcoming Launches'}
                        number = {props.upcomingLaunchLength}
                        refresh = {props.refreshLaunch}
                    ></Metric>
                </div>
            </Grid>

        </Grid>

    )
}
