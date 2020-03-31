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
import TableHead from '@material-ui/core/TableHead';
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

      const difference = props.launchData.launch_date_unix - Math.floor(Date.now() / 1000);
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
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });
    
    const timerComponents = [];
    Object.keys(timeLeft).forEach(interval => {
      if (!timeLeft[interval]) {
        return;
      }
  
      timerComponents.push(
        <span className = {classes.number}>
          {timeLeft[interval]}
        </span>
      );
    });

    
    let rocketName = '';
    if(props.launchData.rocket !== undefined) {
      rocketName = props.launchData.rocket.rocket_name;
    }

    //console.log(props.launchData.rocket);

    return(
        <div className = {dashboardClasses.dashboardCardContainer}>
            <div className = {classes.featureLaunch}>
                {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>}
             */}
            <Typography className = {classes.featureLaunchTitle}>
                Next Launch - {props.launchData.mission_name}
            </Typography>
            <Typography className = {classes.tminus}>
                T-MINUS
            </Typography>
            <Grid container spacing = {2} direction ="row" justify = "center" alignItmes ="center">

                <Grid item xs = {3}>
                    <div className = {classes.countdownContainer}>
                        {timerComponents[0]}
                    </div>
                    <Typography className = {classes.time}>
                        Days
                    </Typography>
                </Grid>
                <Grid item xs = {3}>
                    <div className = {classes.countdownContainer}>
                        {timerComponents[1]}
                    </div>
                    <Typography className = {classes.time}>
                      Hours
                    </Typography>
                </Grid>
                <Grid item xs = {3}>
                    <div className = {classes.countdownContainer}>
                        {timerComponents[2]}
                    </div>
                    <Typography className = {classes.time}>
                      Minutes
                    </Typography>
                </Grid>

                <Grid item xs = {3}>
                    <div className = {classes.countdownContainer}>
                        {timerComponents[3]}
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
                        Feb 3, 2020
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        Flight Number
                      </TableCell>
                      <TableCell>
                        {props.launchData.flight_number}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        Rocket Name
                      </TableCell>
                      <TableCell>
                        {rocketName}
                        {/* {props.launchData.rocket['rocket_name']}  */}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        Customer
                      </TableCell>
                      <TableCell>
                        {/* {props.launchData.second_stage.payloads[0].customers[0]} */}
                      </TableCell>
                    </TableRow>
                    {/* {rows.map(row => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.key}
                        </TableCell>
                        <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))} */}
                  </TableBody>

              </Table>
            </TableContainer>

            </div>
        </div>
    )
}