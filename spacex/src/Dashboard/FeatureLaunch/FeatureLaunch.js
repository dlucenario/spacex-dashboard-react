import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import launchIcon from '../../images/icons/rocket.svg';
import Container from '../../components/Container';
import CustomButton from '../../components/Button';

const useStyles = makeStyles({
  numberContainer: {
    width: '35px',
    height: '50px',
    backgroundImage: 'linear-gradient(152deg, #1B262C 0%, #0F4C75 100%)',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: '24px',
    color: '#ffffff',
    margin: 0
  },
   time: {
     fontSize: '16px',
     textAlign: 'center',
     color: '#DEE5E5',
     margin: '10px 0px',
     textTransform: 'uppercase'
   },
   title: {
    fontSize: '24px',
    textAlign: 'center',
    color: '#DEE5E5',
    marginBottom: '20px',
    marginTop: '0px',
    textTransform: 'uppercase'
   },
   actionContainer: {
    width: '100%',
   },
   featureLaunchContainer: {
    marginTop: '30px',
    height: '210px',
    position: 'relative'
   },
   action : {
     position: 'absolute',
     left: '37%',
     top: '73%'
   }
});

export default function FeatureLaunch(props) {
  const classes = useStyles();
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

    let seconds = [];
    if(timeLeft.seconds !== undefined && timeLeft.seconds >= 10) {
      seconds = timeLeft.seconds.toString().split('');
    } else {
      seconds = [0,timeLeft.seconds];
    }

    let minutes = [];
    if(timeLeft.minutes !== undefined && timeLeft.minutes >= 10) {
      minutes = timeLeft.minutes.toString().split('');
    } else {
      minutes = [0,timeLeft.minutes];
    }

    let hours = [];
    if(timeLeft.hours !== undefined && timeLeft.hours >= 10) {
      hours = timeLeft.hours.toString().split('');
    } else {
      hours = [0,timeLeft.hours];
    }

    let days = [];
    if(timeLeft.days !== undefined && timeLeft.days >= 10) {
      days = timeLeft.days.toString().split('');
    } else {
      days = [0,timeLeft.days];
    }
    
    return(
      <Container
        logo = {launchIcon}
        title = {`Next Launch - ${props.launchData.missionName}`}
        secondaryTitle = {props.launchData.launchDate}
        headerExist = {true}>

          <div className = {clsx(classes.featureLaunchContainer)}>
          <p className = {clsx(classes.title)}> t-minus</p>
          <Grid container direction="row" justify="center" alignItems="center" spacing = {1}>

            {/* DAYS */}
            <Grid item>
              <Grid container direction="row" spacing = {1} justify="center" alignItems="center">
                <Grid item >
                  <div className = {clsx(classes.numberContainer)}>
                    <p className = {clsx(classes.number)}>{days[0]}</p>
                  </div>
                </Grid>
                <Grid item>
                  <div className = {clsx(classes.numberContainer)}>
                    <p className = {clsx(classes.number)}>{days[1]}</p>
                  </div>
                </Grid>
                <Grid item>
                    <p className = {clsx(classes.number)}>:</p>
                </Grid>
              </Grid>
              <Grid item lg = {12}>
                  <p className = {clsx(classes.time)}>Days</p>
              </Grid>
            </Grid>

            {/* HOURS */}
            <Grid item>
              <Grid container direction="row" spacing = {1} justify="center" alignItems="center">
                <Grid item >
                  <div className = {clsx(classes.numberContainer)}>
                    <p className = {clsx(classes.number)}>{hours[0]}</p>
                  </div>
                </Grid>
                <Grid item>
                  <div className = {clsx(classes.numberContainer)}>
                    <p className = {clsx(classes.number)}>{hours[1]}</p>
                  </div>
                </Grid>
                <Grid item>
                    <p className = {clsx(classes.number)}>:</p>
                </Grid>
              </Grid>
              <Grid item lg = {12}>
                  <p className = {clsx(classes.time)}>HOURS</p>
              </Grid>
            </Grid>

            {/* MINUTES */}
            <Grid item>
              <Grid container direction="row" spacing = {1} justify="center" alignItems="center">
                <Grid item >
                  <div className = {clsx(classes.numberContainer)}>
                    <p className = {clsx(classes.number)}>{minutes[0]}</p>
                  </div>
                </Grid>
                <Grid item>
                  <div className = {clsx(classes.numberContainer)}>
                    <p className = {clsx(classes.number)}>{minutes[1]}</p>
                  </div>
                </Grid>
                <Grid item>
                    <p className = {clsx(classes.number)}>:</p>
                </Grid>
              </Grid>
              <Grid item lg = {12}>
                  <p className = {clsx(classes.time)}>min</p>
              </Grid>
            </Grid>

            {/* SECONDS */}
            <Grid item>
              <Grid container direction="row" spacing = {1} justify="center" alignItems="center">
                <Grid item >
                  <div className = {clsx(classes.numberContainer)}>
                    <p className = {clsx(classes.number)}>{seconds[0]}</p>
                  </div>
                </Grid>
                <Grid item>
                  <div className = {clsx(classes.numberContainer)}>
                    <p className = {clsx(classes.number)}>{seconds[1]}</p>
                  </div>
                </Grid>
              </Grid>
              <Grid item lg = {12}>
                  <p className = {clsx(classes.time)}>SEC</p>
              </Grid>
            </Grid>

          </Grid>

            {/* <Grid container justify = "flex-end">
              <Grid item>
                <CustomButton>View Action</CustomButton>
              </Grid>
            </Grid> */}

            <div className = {classes.action}>
              <CustomButton>View Launch</CustomButton>
            </div>
          </div>
      </Container>
    )
}