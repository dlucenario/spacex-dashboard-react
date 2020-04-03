import React from 'react';
import  { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import * as actions from '../store/actions/index';
import classes from './LaunchItem.module.css';
import { Typography } from '@material-ui/core';

import LaunchLinks from './LaunchLinks';
import DataTable from './DataTable';
import LaunchGallery from './LaunchGallery';

function formatLandStatus(status) {
    
    let statusElement = <span>NA</span>;
    switch(status) {
        case true:
            statusElement = <span style={{color: '#6DD400'}}>Success</span>;
            break;
        case false:
            statusElement =  <span style={{color: '#E02020'}}>Fail</span>;
            break;
        case null:
            break;
        default:
            break;
    }
    return statusElement;
}

class LaunchItem extends React.Component {

    componentDidMount() {
        this.props.getOneLaunch(this.props.id);
        
    }

    render() {

        let missionId = 'No Mission ID';
        if(this.props.oneLaunch.missionId !== undefined) {
            if(this.props.oneLaunch.missionId.length !== 0) {
                missionId = this.props.oneLaunch.missionId;
            }
        }

        return(
            <div className= {classes.launchItem}>

            <Grid container spacing = {2}>
                <Grid item lg = {6}>
                    <div className = {'customContainer'}>
                        <div className = {classes.launchItemHeaderContainer}>
                            <div className = {classes.launchPatchContainer}>
                                <img src = {this.props.oneLaunch.missionPatchLink}  
                                alt = 'patch_icon'
                                className = {classes.launchPatchImage} />
                            </div>
                            <Typography className = {classes.launchItemTitle}>
                                Flight Number: {this.props.oneLaunch.flightNumber}
                            </Typography>
                        </div>
                        <Divider style = {{backgroundColor: '#ffffff', height: '2px'}} />
                        <div className = {classes.launchItemStatusContainer}>
                            <Typography>
                                Launch: {formatLandStatus(this.props.oneLaunch.launchSuccess)}
                            </Typography>
                            <Typography>
                                Land: { formatLandStatus(this.props.oneLaunch.landSuccess) }
                            </Typography>
                            <Typography>
                                Mission ID: {missionId}
                            </Typography>
                        </div>
                        <div className = {classes.launchItemDescriptionContainer}>
                            <Typography className = {classes.missionName}>
                                Mission Name: {this.props.oneLaunch.missionName}
                            </Typography>
                            <Typography style={{textAlign:'justify',color: '#9a9a9a'}}>
                                {this.props.oneLaunch.details}
                            </Typography>
                        </div>
                        <LaunchLinks
                            links = {this.props.oneLaunch.links}
                        ></LaunchLinks>
                    </div>
                </Grid>
                <Grid item lg = {6}>
                    <div>
                        <iframe width="100%" height="400"
                            title = 'space-x-video'
                            src={`https://www.youtube.com/embed/${this.props.oneLaunch.videoId}?origin=https://spacex.koalafiedcoder.com`}>
                        </iframe>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing = {2}>
                <Grid item lg = {6}>
                    <div className = {'customContainer'}>
                        <DataTable
                            title = 'Launch Details'
                            dataTable = {this.props.oneLaunch.launchTable}>
                        </DataTable>
                    </div>
                </Grid>
                <Grid item lg = {6}>
                <div className = {'customContainer'}>
                    <DataTable
                        title = 'Payload Details'
                        dataTable = {this.props.oneLaunch.payloadTable}>
                    </DataTable>
                </div>
                </Grid>
            </Grid>

            <LaunchGallery
                gallery = {this.props.oneLaunch.galleryLinks}
            ></LaunchGallery>
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
