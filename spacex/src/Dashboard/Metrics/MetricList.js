import React from 'react';
import Metric from './Metric';
import Grid from '@material-ui/core/Grid';

import classes from './MetricList.module.css';

export default function MetricList(props) {

    const launchIcon = require('../../images/icons/rocket.svg');
    const missionIcon = require('../../images/icons/target.svg');
    // const rocketIcon = require('../../images/icons/project.svg');
    // const dragonIcon = require('../../images/icons/dragon.svg');
    const cpuIcon = require('../../images/icons/cpu.svg');
    const shipIcon = require('../../images/icons/boat.svg');

    return(
        
        <div className = {classes.metricList}>
            <Grid container spacing = {2}>
                <Grid item lg = {3}>
                    <Metric 
                        icon = {launchIcon}
                        altLogo = {'launch-logo'}
                        title = {'Launches'}
                        number = {props.launchesLength}
                        refresh = {props.refreshLaunch}
                    ></Metric>
                </Grid>
                <Grid item lg = {3}>
                    <Metric 
                        icon = {missionIcon} 
                        altLogo = {'mission-logo'}
                        title = {'Missions'}
                        number = {props.missionLength}
                        refresh = {props.refreshMissions}
                    ></Metric>
                </Grid>
                {/* <Grid item lg = {2}>
                    <Metric 
                        icon = {rocketIcon} 
                        altLogo = {'rocket-logo'}
                        title = {'Rockets'}
                        number = {this.props.rockets.length}
                    ></Metric>
                </Grid>
                <Grid item lg = {2}>
                    <Metric 
                        icon = {dragonIcon} 
                        altLogo = {'dragon-logo'}
                        title = {'Dragons'}
                        number = {this.props.dragons.length}
                    ></Metric>
                </Grid> */}
                <Grid item lg = {3}>
                    <Metric 
                        icon = {cpuIcon} 
                        altLogo = {'core-logo'}
                        title = {'Cores'}
                        number = {props.coreLength}
                        refresh = {props.refreshCores}
                    ></Metric>
                </Grid>
                <Grid item lg = {3}>
                    <Metric 
                        icon = {shipIcon} 
                        altLogo = {'ship-logo'}
                        title = {'Ships'}
                        number = {props.shipLength}
                        refresh = {props.refreshShips}
                    ></Metric>
                </Grid>
            </Grid>
        </div>
    )
}