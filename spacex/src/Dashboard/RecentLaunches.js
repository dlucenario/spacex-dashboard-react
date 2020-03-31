import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import classes from './Dashboard.module.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    }
});

export default function RecentLaunches(props) {
    const materialClasses = useStyles();
    return(
        <div className = {classes.dashboardCardContainer}>
            <Typography classes = {{root: materialClasses.tableTitle}}>
                Recent Launches
            </Typography>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell classes = {{root: materialClasses.tableHeader}} >mission</TableCell>
                        <TableCell classes = {{root: materialClasses.tableHeader}} align="right">LAUNCH DATE</TableCell>
                        <TableCell classes = {{root: materialClasses.tableHeader}} align="right">LAUNCH STATUS</TableCell>
                        <TableCell classes = {{root: materialClasses.tableHeader}} align="right">LAND STATUS</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.launchData.map(row => (
                        <TableRow key={row.name}>
                        <TableCell classes = {{root: materialClasses.tableContent}} component="th" scope="row">
                            {row.mission_name}
                        </TableCell>
                        <TableCell classes = {{root: materialClasses.tableContent}} align="right">{row.date}</TableCell>
                        <TableCell classes = {{root: decorateStatus(row.launch_success,materialClasses)}} align="right">
                            {row.launch_success ? 'Success' : 'Fail'}
                        </TableCell>
                        <TableCell classes = {{root: decorateStatus(row.land_success,materialClasses)}} align="right">
                            {formatLandStatus(row.land_success)}
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}