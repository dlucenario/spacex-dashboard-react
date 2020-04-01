import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classes from './Dashboard.module.css';
import { Typography } from '@material-ui/core';

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

export default function UpcomingLaunch(props) {
    const materialClasses = useStyles();
    return(
        <div className = {classes.dashboardCardContainer}>

            <Typography classes = {{root: materialClasses.tableTitle}}>
                Upcoming Launches
            </Typography>
                <TableContainer>
                    <Table  className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell classes = {{root: materialClasses.tableHeader}}>mission</TableCell>
                                <TableCell classes = {{root: materialClasses.tableHeader}} align="right"> launch date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.launchData.map(row => (
                                <TableRow key={row.mission_name}>
                                    <TableCell classes = {{root: materialClasses.tableContent}} width="60%" component="th" scope="row">{row.mission_name}</TableCell>
                                    <TableCell classes = {{root: materialClasses.tableContent}} width="40%" align="right">{row.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

        </div>
    )
}
