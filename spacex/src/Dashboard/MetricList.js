import React from 'react';
import Metric2 from '../components/Metric';
import Grid from '@material-ui/core/Grid';

import RefreshIcon from '@material-ui/icons/Refresh';

export default function MetricList(props) {

    const launchIcon = require('../images/icons/rocket.svg');
    const missionIcon = require('../images/icons/target.svg');
    // const rocketIcon = require('../../images/icons/project.svg');
    // const dragonIcon = require('../../images/icons/dragon.svg');
    // const cpuIcon = require('../../images/icons/cpu.svg');
    // const shipIcon = require('../../images/icons/boat.svg');

    return(
        
        <div>
            <Grid container spacing = {2}  justify="space-between" alignItems="stretch">
                <Grid item xs = {12} lg = {12}>
                    <Metric2 
                        icon = {launchIcon}
                        altLogo = {'launch-logo'}
                        title = {'Launches'}
                        number = {props.launchesLength}
                        action = {props.refreshLaunch}
                        actionIcon = {<RefreshIcon></RefreshIcon>}
                        actionTitle = {'Update Now'}
                    ></Metric2>
                </Grid>

                <Grid item xs = {12} lg = {12}>
                    <Metric2 
                        icon = {missionIcon}
                        altLogo = {'mission-logo'}
                        title = {'Missions'}
                        number = {props.missionLength}
                        action = {props.refreshLaunch}
                        actionIcon = {<RefreshIcon></RefreshIcon>}
                        actionTitle = {'Update Now'}
                    ></Metric2>
                </Grid>



            </Grid>
        </div>
    )
}