import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import dashboardClasses from '../Dashboard.module.css';
import classes from './FeatureLaunch.module.css';
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  tableTitle: {
      color: '#9a9a9a'
  },
  tableHeader: {
      color: '#ffffff',
      textTransform: 'uppercase'
  },
  tableContent: {
      color: '#9a9a9a'
  }
});

export default function FeatureLaunch(props) {
  const materialClasses = useStyles();
  const calculateTimeLeft = () => {

      const difference = props.launchData.launchDateUnix - Math.floor(Date.now() / 1000);
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / ( 60 * 60 * 24)),
          hours: Math.floor((difference / (60 * 60)) % 24),
          minutes: Math.floor((difference / 60) % 60),
          seconds: Math.floor((difference) % 60)
        };
      }
      return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      
      return () => {clearTimeout(timeoutId)}
    });
    
    return(
      
        <div className = {dashboardClasses.dashboardCardContainer}>
            <div className = {classes.featureLaunch}>
                {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>}
             */}
            <Typography className = {classes.featureLaunchTitle}>
                Next Launch - {props.launchData.missionName}
            </Typography>
            <Typography className = {classes.tminus}>
                T-MINUS
            </Typography>
            <Grid container spacing = {2} direction ="row" justify = "center" alignItems ="center">
                {/* Bug: when minutes turn to 0*/}
                <Grid item xs = {3}>
                    <div className = {classes.countdownContainer}>
                      <span className = {classes.number}>
                        {timeLeft.days}
                      </span>
                    </div>
                    <Typography className = {classes.time}>
                        Days
                    </Typography>
                </Grid>
                <Grid item xs = {3}>
                    <div className = {classes.countdownContainer}>
                      <span className = {classes.number}>
                        {timeLeft.hours}
                      </span>
                    </div>
                    <Typography className = {classes.time}>
                      Hours
                    </Typography>
                </Grid>
                <Grid item xs = {3}>
                    <div className = {classes.countdownContainer}>
                      <span className = {classes.number}>
                        {timeLeft.minutes}
                      </span>
                    </div>
                    <Typography className = {classes.time}>
                      Minutes
                    </Typography>
                </Grid>

                <Grid item xs = {3}>
                    <div className = {classes.countdownContainer}>
                      <span className = {classes.number}>
                        {timeLeft.seconds}
                      </span>
                    </div>
                    <Typography className = {classes.time}>
                      Seconds
                    </Typography>
                </Grid>

            </Grid>

            <TableContainer>
              <Table className={classes.table} aria-label="simple table">

                  <TableBody>
                    <TableRow>
                      <TableCell classes = {{root: materialClasses.tableHeader}}>
                        Launch Date
                      </TableCell>
                      <TableCell classes = {{root: materialClasses.tableContent}}>
                        {props.launchData.launchDate}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell classes = {{root: materialClasses.tableHeader}}>
                        Flight Number
                      </TableCell>
                      <TableCell classes = {{root: materialClasses.tableContent}}>
                        {props.launchData.flightNumber}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell classes = {{root: materialClasses.tableHeader}}>
                        Rocket Name
                      </TableCell>
                      <TableCell classes = {{root: materialClasses.tableContent}}>
                        {props.launchData.rocketName}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell classes = {{root: materialClasses.tableHeader}}>
                        Customer
                      </TableCell>
                      <TableCell classes = {{root: materialClasses.tableContent}}>
                        {props.launchData.customerName}
                      </TableCell>
                    </TableRow>
                  </TableBody>

              </Table>
            </TableContainer>

            </div>
        </div>
    )
}