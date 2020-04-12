import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Container from '../components/Container';
import clockIcon from '../images/icons/clock.svg';
import CustomButton from '../components/Button';
function formatLandStatus(status) {
    
    let statusString = '';
    switch(status) {
        case true:
            statusString = 'Success';
            break;
        case false:
            statusString = 'Fail';
            break;
        case null:
            statusString = 'NA';
            break;
        default:
            statusString = 'NA';
    }
    return statusString;
}

function decorateStatus(status, classes) {
    let cssClass = classes.tableContent;
    switch(status) {
        case true:
            cssClass = classes.tableContentGreen
            break;
        case false:
            cssClass = classes.tableContentRed
            break;
        case null:
            break;
        default:
            break;
    }
    return cssClass;
}

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
    },
    tableContentGreen: {
        color: 'green'
    },
    tableContentRed: {
        color: 'red'
    },
    patchLogo: {
        width: '60px',
        height: '60px',
        filter: 'grayscale(70%)'
    },
    paragraph: {
        margin: 0,
        marginBottom: '10px'
    },
    success: {
        color: '#6DD400'
    },
    fail: {
        color: '#E02020'
    },
    date: {
        color: '#DEE5E5'
    },
    missionName: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    status: {
        color: '#ffffff',
        display: 'inline',
        marginRight: '5px'
    },
    item: {
        padding: '10px',
        marginBottom: '12px',
    }
});

export default function RecentLaunches(props) {
    const  classes = useStyles();
    return(
        <Container
        logo = {clockIcon}
        title = {`Recent Launches`}
        headerExist = {true}>
            {props.launchData.map( (element) => {
                return(
                    <Grid container spacing = {2} className = {clsx(classes.item)} justify="center" alignItems="center">
                        <Grid item lg = {2}>
                            <img 
                                className = {clsx(classes.patchLogo)}
                                src = {element.missionPatch} alt = {element.mission_name}></img>
                        </Grid>
                        <Grid item lg = {8}>
                            <p className = {clsx(classes.paragraph,classes.status)}>
                                Launch:
                                <span className = {clsx({
                                    [classes.success]: element.launch_success,
                                    [classes.fail]: !element.launch_success
                                    })}>{ formatLandStatus(element.launch_success) }
                                </span>
                            </p>
                            <p className = {clsx(classes.paragraph,classes.status)}>
                               Land: 
                               <span className = {clsx({
                                    [classes.success]: element.land_success,
                                    [classes.fail]: element.land_success === false
                                    })}>{ formatLandStatus(element.land_success) }
                                </span>
                            </p>
                            <p className = {clsx(classes.paragraph,classes.date)}>{element.date}</p>
                            <p className = {clsx(classes.paragraph,classes.missionName)}>{element.mission_name}</p>
                        </Grid>
                        <Grid item lg = {2}>
                            <CustomButton>View</CustomButton>
                        </Grid>
                    </Grid>
                )
            })}

        </Container>
    )
}