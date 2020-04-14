import React from 'react';
import  { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import { withStyles } from '@material-ui/styles';

import * as actions from '../store/actions/index';

import LaunchLinks from './LaunchLinks';
import DataTable from '../components/DataTable';
import LaunchGallery from './LaunchGallery';
import clsx from 'clsx';
import { convertStatus } from '../shared/utility';

import CustomContainer from '../components/Container';
import DetailsIcon from '../images/icons/info.svg';
import VideoIcon from '../images/icons/video.svg';
import LaunchIcon from '../images/icons/rocket.svg';
import PayloadIcon from '../images/icons/product.svg';
import GalleryIcon from '../images/icons/photo.svg';

import Fade from '@material-ui/core/Fade';
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

const styles = {
    launchItemHeaderContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    launchPatchContainer: {

    },
    launchPatchImage: {
        width: '100px',
        height: '100px'
    },
    launchItemTitle: {
        marginLeft: '28px',
        color: '#ffffff',
        fontSize: '28px',
        display: 'inline',
    }, 
    divider: {
        background: 'linear-gradient(0deg,#0F4C75,#3282B8)',
        height: '3px',
        margin: '10px 0px'
    },
    launchItemStatusContainer: {
        marginBottom: '8px',
        display: 'inline-block',
        width: '150px'
    },
    launchItemStatus: {
        display: 'inline',
        color: '#DEE5E5',
    },
    details: {
        color: '#ffffff',
        textAlign: 'justify'
    },
    success: {
        color: '#6DD400'
    },
    fail: {
        color: '#E02020'
    },

}
class LaunchItem extends React.Component {

    componentDidMount() {
        this.props.getOneLaunch(this.props.id);
        
    }

    render() {

        const { classes } = this.props;
        console.log(this.props.oneLaunch);
        let missionId = 'No Mission ID';
        if(this.props.oneLaunch.missionId !== undefined) {
            if(this.props.oneLaunch.missionId.length !== 0) {
                missionId = this.props.oneLaunch.missionId;
            }
        }

        return(
            <Fade in = {true} timeout = {500}>
            <Grid container spacing = {2}>
                
                <Grid item lg = {12}>
                    <Grid container spacing = {2}>
                        <Grid item lg = {6}>
                            <CustomContainer
                                logo = {DetailsIcon}
                                title = {`Flight Number: ${this.props.oneLaunch.flightNumber}`}
                                headerExist = {true}>
                                        
                                <div className = {classes.launchItemHeaderContainer}>
                                    <div className = {classes.launchPatchContainer}>
                                        <img src = {this.props.oneLaunch.missionPatchLink}  
                                        alt = 'patch_icon'
                                        className = {classes.launchPatchImage} />
                                    </div>
                                    <p className = {classes.launchItemTitle}>
                                        {this.props.oneLaunch.missionName}
                                    </p>
                                </div>
                                <Divider className = {classes.divider} />
                                
                                <div className = {classes.launchItemStatusContainer}>
                                    <p className = {classes.launchItemStatus}>{`Launch: `}
                                        <span className = {clsx({
                                            [classes.success]: this.props.oneLaunch.launchSuccess,
                                            [classes.fail]: !this.props.oneLaunch.launchSuccess
                                        })}>{convertStatus(this.props.oneLaunch.launchSuccess)}</span>
                                    </p>
                                </div>

                                <div className = {classes.launchItemStatusContainer}>
                                    <p className = {classes.launchItemStatus}>{`Land: `}
                                        <span className = {clsx({
                                            [classes.success]: this.props.oneLaunch.landSuccess,
                                            [classes.fail]: !this.props.oneLaunch.landSuccess
                                        })}>{convertStatus(this.props.oneLaunch.landSuccess)}</span>
                                    </p>
                                </div>
                                
                                <br/>

                                <div className = {classes.launchItemStatusContainer}>
                                    <p className = {classes.launchItemStatus}>{`Status: `}
                                        <span className = {clsx({
                                            [classes.success]: !this.props.oneLaunch.upcoming,
                                            [classes.fail]: this.props.oneLaunch.upcoming
                                        })}>{ this.props.oneLaunch.upcoming ? 'Pending' : 'Success'}</span>
                                    </p>
                                </div>

                                <div className = {classes.launchItemStatusContainer}>
                                    <p className = {classes.launchItemStatus}>{`ID: `}
                                        {missionId}
                                    </p>
                                </div>

                                <div>
                                    <p className = {classes.details}>
                                        {this.props.oneLaunch.details}
                                    </p>
                                    <LaunchLinks
                                        links = {this.props.oneLaunch.links}
                                    ></LaunchLinks>
                                </div>
                            </CustomContainer>
                        </Grid>
                        <Grid item lg = {6}>
                            <CustomContainer
                                logo = {VideoIcon}
                                title = {'Video Link'}
                                headerExist = {true}>
                                
                                <iframe width="100%" height="400px"
                                    title = 'space-x-video'
                                    frameBorder="0"
                                    src={`https://www.youtube.com/embed/${this.props.oneLaunch.videoId}?origin=https://spacex.koalafiedcoder.com`}>
                                </iframe>

                            </CustomContainer>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Second Row */}
                <Grid item lg = {12}>
                    <Grid container spacing = {2} alignItems="stretch">
                        <Grid item lg ={6}>
                            <CustomContainer
                                logo = {LaunchIcon}
                                title = {'Launch Details'}
                                headerExist = {true}>
                                <DataTable
                                    dataTable = {this.props.oneLaunch.launchTable}>
                                </DataTable>
                            </CustomContainer>
                        </Grid>
                        <Grid item lg = {6}>
                            <CustomContainer
                                logo = {PayloadIcon}
                                title = {`Payload Details`}
                                headerExist = {true}>
                                <DataTable
                                    dataTable = {this.props.oneLaunch.payloadTable}>
                                </DataTable>
                            </CustomContainer>
                        </Grid>
                    </Grid>
                </Grid>
                
                {/* Third Row */}
                <Grid item lg = {12}>
                    <CustomContainer
                        logo = {GalleryIcon}
                        title = {`Launch Gallery`}
                        secondaryTitle = {this.props.oneLaunch.missionName}
                        headerExist = {true}>
                            <LaunchGallery
                                missionName = {this.props.oneLaunch.missionName}
                                gallery = {this.props.oneLaunch.galleryLinks}
                            ></LaunchGallery>
                    </CustomContainer>
                </Grid>
            </Grid>
            </Fade>
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

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(LaunchItem));
