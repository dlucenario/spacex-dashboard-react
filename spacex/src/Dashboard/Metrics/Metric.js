import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import classes from './MetricList.module.css';
import dashboardClasses from '../Dashboard.module.css';

import CountUp from 'react-countup';
import RefreshIcon from '@material-ui/icons/Refresh';

import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    divider: {
      background: 'linear-gradient(0deg,#3358f4,#1d8cf8)',
      height: '2px'
    },
});

export default function Metric(props){
    const materialClasses = useStyles();
    return(
      <div className = {dashboardClasses.dashboardCardContainer} >
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
            <Divider classes={{root: materialClasses.divider}} />

            <Grid container>
                <div className = {classes.actionInCard} onClick = {props.refresh}>
                    <RefreshIcon></RefreshIcon>
                    <Typography>
                        Update Now
                    </Typography>
                </div>
            </Grid>
        </div>
    );

}