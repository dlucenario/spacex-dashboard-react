import React from 'react';
import  { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import * as actions from '../store/actions/index';
import classes from './LaunchItem.module.css';
import { Typography } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class LaunchItem extends React.Component {

    componentDidMount() {
        console.log('mounting');
        this.props.getOneLaunch(this.props.id);
        
    }

    render() {
        console.log(this.props.oneLaunch);
        let tableData =
         <TableRow>
            <TableCell>
                No Data Available
            </TableCell>
            <TableCell>
                No Data Available
            </TableCell>
        </TableRow>

        if(this.props.oneLaunch.tableData !== undefined) {
            tableData = Object.keys(this.props.oneLaunch.tableData).map( (element) => {
                const tableElement = <TableRow>
                    <TableCell>
                        {this.props.oneLaunch.tableData[element].text}
                    </TableCell>
                    <TableCell>
                        {this.props.oneLaunch.tableData[element].value}
                    </TableCell>
                </TableRow>

                return tableElement;
            });
        }

        let gallery = <span></span>;
        if(this.props.oneLaunch.galleryLinks !== undefined) {
            gallery = this.props.oneLaunch.galleryLinks.map( (element) => {
                const galleryElement = <Grid item><img style={{width:'25vw', height: '25vw'}} src={element}></img></Grid>
                return galleryElement;
            })
        }

        return(
            <div className= {classes.launchItem}>
            <Grid container spacing = {2}>
                <Grid item lg = {6}>
                    <div className = {classes.launchItemDetailContainer}>
                        <div className = {classes.launchItemHeaderContainer}>
                            <div className = {classes.launchPatchContainer}>
                                <img src = {this.props.oneLaunch.missionPatchLink}  
                                alt = 'mission_patch_icon'
                                className = {classes.launchPatchImage} />
                            </div>
                            <Typography className = {classes.launchItemTitle}>
                                Flight Number: {this.props.oneLaunch.flightNumber}
                            </Typography>
                        </div>
                        <Divider />
                        <div className = {classes.launchItemStatusContainer}>
                            <Typography>
                                Launch: {this.props.oneLaunch.launchSuccess ? 'Success': 'Fail'}
                            </Typography>
                            <Typography>
                                Land: {this.props.oneLaunch.landSuccess ? 'Success': 'Fail'}
                            </Typography>
                        </div>
                        <div className = {classes.launchItemDescriptionContainer}>
                            <Typography className = {classes.launchItemTitle}>
                                Mission Name: {this.props.oneLaunch.missionName}
                            </Typography>
                            <Typography>
                                Mission ID: {this.props.oneLaunch.missionId ? this.props.oneLaunch.missionId[0] : '' }
                            </Typography>
                            <Typography>
                                {this.props.oneLaunch.details}
                            </Typography>
                        </div>
                        <div className = {classes.launchItemLinks}>
                            <Button
                            variant="contained"
                            color="default"
                            className={classes.button}
                            startIcon={<CloudUploadIcon />}
                            >Reddit</Button>
                            <Button
                            variant="contained"
                            color="default"
                            className={classes.button}
                            startIcon={<CloudUploadIcon />}
                            >Reddit</Button>
                            <Button
                            variant="contained"
                            color="default"
                            className={classes.button}
                            startIcon={<CloudUploadIcon />}
                            >Reddit</Button>
                        </div>
                    </div>
                </Grid>
                <Grid item lg = {6}>
                    <div>
                        <iframe width="100%" height="400"
                            title = 'space-x-video'
                            src={`https://www.youtube.com/embed/${this.props.oneLaunch.videoId}`}>
                        </iframe>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing = {2}>
                <Grid item lg = {6}>
                <div className = {'customContainer'}>
                        <Typography>
                                Launch Details
                            </Typography>
                            <TableContainer>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableBody>
                                        {tableData}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                </Grid>
                <Grid item lg = {6}>
                <div className = {'customContainer'}>
                        <Typography>
                                Payload Details
                            </Typography>
                            <TableContainer>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableBody>
                                        {tableData}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" justify="center">
                {gallery}

            </Grid>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        oneLaunch: state.launchReducer.oneLaunch
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getOneLaunch: (id) => dispatch(actions.getOneLaunch(id))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(LaunchItem);
