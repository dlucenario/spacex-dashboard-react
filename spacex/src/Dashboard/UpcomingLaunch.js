import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '../components/Container';
import CustomButton from '../components/Button';
import planIcon from '../images/icons/plan.svg';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    eventTimeline: {
        position: 'relative',
        "&::before": {
            content: `''`,
            position: 'absolute',
            width: '3px',
            backgroundColor: '#3282b8',
            top: '10px',
            bottom: '0',
            left: '10px',
        }
    },
    eventContent: {
        paddingLeft: '40px',
        marginBottom: '38px',
        position: 'relative',
        "&::before": {
        content: `''`,
        position: 'absolute',
        width: '15px',
        height: '15px',
        backgroundColor: '#3282b8',
        boxShadow: '0 0 0 5px rgb(50, 130, 184,0.2)',
        borderRadius: '50%',
        top: '20px',
        left: '4px'
        }
    }, 
    missionName: {
        margin: 0,
        color: '#ffffff',
        fontSize: '16px',
        marginBottom: '5px'
    },
    missionSub: {
        margin: 0,
        color: '#DEE5E5',
        fontSize: '14px',
        marginBottom: '5px'
    },
    link: {
        textDecoration: 'none',
        color: '#ffffff'
    }
});

export default function UpcomingLaunch(props) {
    const classes = useStyles();
    console.log(props);
    return(
        <Container
        logo = {planIcon}
        title = {`Upcoming Launches`}
        headerExist = {true}>

            <div className = {clsx(classes.eventTimeline)}>
                {
                    props.launchData.map( (element) => (
                       
                        <div className = {clsx(classes.eventContent)}>
                            <Grid container spacing = {2}>
                                <Grid item lg = {8}>
                                    <p className = {clsx(classes.missionName)}>{element.mission_name}</p>
                                    <p className = {clsx(classes.missionSub)}>{element.date}</p>
                                    <p className = {clsx(classes.missionSub)}>{element.rocket}</p>
                                </Grid>
                                <Grid item lg = {4}>
                                    <div style = {{float:'right'}}>
                                        <CustomButton>
                                            <NavLink to={`/launch/${element.flightNumber}`} className = {classes.link}>
                                                VIEW
                                            </NavLink>
                                        </CustomButton>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}
