import React from 'react';
import Grid from '@material-ui/core/Grid';

import Container from '../components/Container';
import DataTable from '../components/DataTable';
import launchLogo from '../images/icons/rocket.svg';
import landLogo from '../images/icons/pin.svg';
import planLogo from '../images/icons/plan.svg';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    siteName: {
        color: '#ffffff',
        fontSize: '24px',
        marginTop: '10px',
        margin: '0'
    },
    siteDetails: {
        color: '#DEE5E5',
        textAlign: 'justify',
        margin: '30px 0px'
    },
    siteStatus: {
        color: '#DEE5E5',
        margin: 0,
        textTransform: 'capitalize',
        marginTop: '5px',
        fontSize: '18px'
    },
    active: {
        color: '#6DD400'
    },
    retired: {
        color: '#E02020'
    }
});

export default function SiteDetail(props) {

    const classes = useStyles();

    let googleMaps = <span></span>;
    if(props.activeSite.detailTable !== undefined) {
        googleMaps = <iframe
        width="100%"
        height="350"
        frameBorder="0"
        allowFullScreen
        title = "gmaps-site"
        src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyCdBZ6DVPLtrzejQs0sKXF61Z_0pBjhFKQ
            &center=${props.activeSite.detailTable.lat.value},${props.activeSite.detailTable.long.value}&zoom=18&maptype=satellite`} >
    </iframe>
    }

    const title = props.launchMode ? 'Launch Site' : 'Land Site'
    const logo = props.launchMode ? launchLogo : landLogo;

    return(
        <Grid container spacing = {2}>
            <Grid item xs = {12}>
                <Container
                    title = {title + `: ${props.activeSite.code}`}
                    logo = {logo}
                    headerExist = {true}
                >
                    <p className = {classes.siteName}>{props.activeSite.name}</p>
                    <p className = {classes.siteStatus}> Site Status: 
                    <span className = {clsx({
                            [classes.active]: props.activeSite.status ==='active',
                            [classes.retired]: props.activeSite.status ==='retired'
                        })}>{' ' + props.activeSite.status}</span>
                    </p>
                    <p className = {classes.siteDetails}>{props.activeSite.detail}</p>
                    
                </Container>
            </Grid>
            <Grid item xs = {12}>
                <Container                    
                    title = {'Site Details'}
                    logo = {planLogo}
                    headerExist = {true}
                >
                <DataTable
                    dataTable = {props.activeSite.detailTable}>
                </DataTable>

                </Container>
            </Grid>
            <Grid item xs = {12}>
                {googleMaps}

            </Grid>
        </Grid>
    )
}