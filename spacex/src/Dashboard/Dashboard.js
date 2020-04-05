import React from 'react';
import  { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import MetricList from './Metrics/MetricList';
import UpcomingLaunch from './UpcomingLaunch';
import FeatureLaunch from './FeatureLaunch/FeatureLaunch';
import RecentLaunches from './RecentLaunches';
// import CustomerChart from './CustomerChart';
import PayloadChart from './PayloadChart';

import * as actions from '../store/actions/index';


class Dashboard extends React.Component {

    componentDidMount() {
        this.props.getPayloadList();
        this.props.getLaunches();
        this.props.getMissions();
        this.props.getCores();
        this.props.getShips();
        this.props.getUpcomingLaunches();
        this.props.getRecentLaunches();
        this.props.getFeatureLaunch();
        
    }
    
    render() {
        return(
            <div>
                <MetricList
                    launchesLength = {this.props.launches.length}
                    missionLength = {this.props.missions.length}
                    coreLength = {this.props.cores.length}
                    shipLength = {this.props.ships.length}
                    refreshLaunch = {this.props.getLaunches}
                    refreshMissions = {this.props.getMissions}
                    refreshCores = {this.props.getCores}
                    refreshShips = {this.props.getShips}
                ></MetricList>
                <Grid container spacing = {2}>
                    <Grid item lg = {8}>
                        <PayloadChart
                            chartData = {this.props.topPayloadData}>
                        </PayloadChart>
                    </Grid>
                    <Grid item lg = {4}>
                        <FeatureLaunch
                            launchData = {this.props.featureLaunch}
                        >
                        </FeatureLaunch>
                    </Grid>
                </Grid>
                <Grid container spacing = {2}>
                    <Grid item lg = {5}>
                        <UpcomingLaunch
                            launchData = {this.props.upcomingLaunches}>
                        </UpcomingLaunch>
                    </Grid>
                    <Grid item lg = {7}>
                        <RecentLaunches
                            launchData = {this.props.recentLaunches}>
                        </RecentLaunches>
                    </Grid>
                    {/* <Grid item lg = {3}>
                        <FeatureLaunch></FeatureLaunch>
                    </Grid> */}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        launches: state.launchReducer.launches,
        missions: state.missionReducer.missions,
        cores: state.coreReducer.cores,
        ships: state.shipReducer.ships,
        upcomingLaunches: state.launchReducer.upcomingLaunches,
        recentLaunches: state.launchReducer.recentLaunches,
        featureLaunch: state.launchReducer.featureLaunch,
        topPayloadData: state.payloadReducer.payloadTopFive
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getLaunches: () => dispatch(actions.getLaunches()),
        getMissions: () => dispatch(actions.getMissions()),
        getCores: () => dispatch(actions.getCores()),
        getShips: () => dispatch(actions.getShips()),
        getUpcomingLaunches: () => dispatch(actions.getUpcomingLaunches()),
        getRecentLaunches: () => dispatch(actions.getRecentLaunches()),
        getFeatureLaunch: () => dispatch(actions.getFeatureLaunch()),
        getPayloadList: () => dispatch(actions.getPayloads())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
