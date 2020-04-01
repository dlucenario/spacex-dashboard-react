import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import classes from './Dashboard.module.css';
import CountUp from 'react-countup';
import RefreshIcon from '@material-ui/icons/Refresh';

import { Typography } from '@material-ui/core';

export default function DashboardCard(props){

    return(
      <div className = {classes.dashboardCardContainer} >
            <Grid container style = {{paddingBottom: '10px'}}>
                <Grid item xs = {7}>
                    <div className = {classes.logoContainer}>
                        <img className = {classes.cardLogo} src = {props.icon} alt= {props.altLogo} />
                    </div>
                </Grid>
                <Grid item xs = {5}>
                    <div style = {{float:'right'}}>
                        <Typography className = {classes.countTitle}>
                            {props.title}
                        </Typography>
                        <Typography className = {classes.count}>
                            <CountUp end={props.number} duration = {3} />
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <Divider/>

            <Grid container>
                {/* style = {{display: 'flex', alignItems: 'center'}} */}
                <div className = {classes.actionInCard}>
                    <RefreshIcon></RefreshIcon>
                    <Typography>
                        Update Now
                    </Typography>
                </div>
            </Grid>
        </div>
    );

}