import React from 'react';
import Grid from '@material-ui/core/Grid';

import CustomMetric from '../components/Metric';
import RefreshIcon from '@material-ui/icons/Refresh';

export default function LaunchMetric(props) {
    const launchIcon = require('../images/icons/rocket.svg');
    const planIcon = require('../images/icons/plan.svg');
    return(
        <Grid container direction = "column" spacing = {2}>
            <Grid item lg = {12}>
                    <CustomMetric 
                        icon = {launchIcon}
                        altLogo = {'launch-logo'}
                        title = {'Launches Executed'}
                        number = {props.finishedLaunchLength}
                        action = {props.refreshLaunch}
                        actionIcon = {<RefreshIcon></RefreshIcon>}
                        actionTitle = {'Update Now'}
                    ></CustomMetric>
            </Grid>
            <Grid item lg = {12}>
                    <CustomMetric 
                        icon = {planIcon}
                        altLogo = {'pending-launches'}
                        title = {'Upcoming Launches'}
                        number = {props.upcomingLaunchLength}
                        action = {props.refreshLaunch}
                        actionIcon = {<RefreshIcon></RefreshIcon>}
                        actionTitle = {'Update Now'}
                    ></CustomMetric>
            </Grid>

        </Grid>

    )
}
