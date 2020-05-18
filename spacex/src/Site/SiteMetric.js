import React from 'react';
import Grid from '@material-ui/core/Grid';

import CustomMetric from '../components/Metric';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function SiteMetric(props) {
    const launchIcon = require('../images/icons/rocket.svg');
    const landIcon = require('../images/icons/pin.svg');
    return(
        <Grid container direction = "row" spacing = {2}>
            <Grid item xs = {12} lg = {6}>
                    <CustomMetric 
                        icon = {launchIcon}
                        altLogo = {'launch-site-logo'}
                        title = {'Launch Pads'}
                        number = {props.launchSitesLength}
                        action = {props.switchToLaunchMode}
                        actionIcon = {<VisibilityIcon></VisibilityIcon>}
                        actionTitle = {'View Launch Sites'}
                    ></CustomMetric>
            </Grid>
            <Grid item xs = {12} lg = {6}>
                    <CustomMetric 
                        icon = {landIcon}
                        altLogo = {'land-site-logo'}
                        title = {'Land Pads'}
                        number = {props.landSitesLength}
                        action = {props.switchToLandMode}
                        actionIcon = {<VisibilityIcon></VisibilityIcon>}
                        actionTitle = {'View Land Sites'}
                    ></CustomMetric>
            </Grid>

        </Grid>

    )
}
