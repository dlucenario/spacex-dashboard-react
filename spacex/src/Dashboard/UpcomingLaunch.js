import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '../components/Container';
import CustomButton from '../components/Button';
import planIcon from '../images/icons/plan.svg';
import Grid from '@material-ui/core/Grid';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';

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
    }
});

export default function UpcomingLaunch(props) {
    const classes = useStyles();
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
                                        <CustomButton>VIEW</CustomButton>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    ))
                }
            </div>
        </Container>
        // <div className = {classes.dashboardCardContainer}>

        //     <Typography classes = {{root: materialClasses.tableTitle}}>
        //         Upcoming Launches
        //     </Typography>
        //         <TableContainer>
        //             <Table  className={classes.table} aria-label="simple table">
        //                 <TableHead>
        //                     <TableRow>
        //                         <TableCell classes = {{root: materialClasses.tableHeader}}>mission</TableCell>
        //                         <TableCell classes = {{root: materialClasses.tableHeader}} align="right"> launch date</TableCell>
        //                     </TableRow>
        //                 </TableHead>
        //                 <TableBody>
        //                     {props.launchData.map(row => (
        //                         <TableRow key={row.mission_name}>
        //                             <TableCell classes = {{root: materialClasses.tableContent}} width="60%" component="th" scope="row">{row.mission_name}</TableCell>
        //                             <TableCell classes = {{root: materialClasses.tableContent}} width="40%" align="right">{row.date}</TableCell>
        //                         </TableRow>
        //                     ))}
        //                 </TableBody>
        //             </Table>
        //         </TableContainer>

        // </div>
    )
}
