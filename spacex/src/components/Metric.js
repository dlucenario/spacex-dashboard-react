import React from 'react';
import Grid from '@material-ui/core/Grid';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from './Container';
import { Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    counterContainer: {
        float: 'right'
    },
    count: {
        float: 'right',
        fontSize: '28px',
        color: '#ffffff'
    },
    image: {
        width: '40px',
        height: '40px'
    },
    imageContainer: {
        width: '40px',
        height: '40px',
        padding: '15px',
        borderRadius: '50%',
        backgroundImage: 'linear-gradient(152deg, #1B262C 0%, #0F4C75 100%)'
    },
    divider: {
        background: 'linear-gradient(0deg,#0F4C75,#3282B8)',
        height: '3px',
        margin: '10px 0px'
    },
    actionInCard: {
        color: '#ffffff',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer'
    }
  });

  
export default function Metric(props) {
    const classes = useStyles();
    return(
        <Container>
            <Grid container justify="space-between">
                <Grid item>
                    <div className = {clsx(classes.imageContainer)}>
                        <img
                            className = {clsx(classes.image)}
                            src = {props.icon}
                            alt = {props.altLogo}
                        />
                    </div>
                </Grid>
                <Grid item>
                    <div className = {clsx(classes.counterContainer)}>
                        <p className = 'secondaryText'>
                            {props.title}
                        </p>
                        <Typography className = {classes.count}>
                            <CountUp end={props.number} duration = {3} />
                        </Typography>
                    </div>
                </Grid>
            </Grid>

            <Divider classes={{root: classes.divider}} />

            <Grid container>
                <Grid item>
                <div className = {classes.actionInCard} onClick = {props.action}>
                    {props.actionIcon}
                    <p className = 'secondaryText'>
                        {props.actionTitle}
                    </p>
                </div>
                </Grid>
            </Grid>

        </Container>
    ) 
}