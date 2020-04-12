import React from 'react';
import  { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import MetricList from './Metrics/MetricList';
import UpcomingLaunch from './UpcomingLaunch';
import FeatureLaunch from './FeatureLaunch/FeatureLaunch';
import RecentLaunches from './RecentLaunches';
import LaunchPerYear from './LaunchPerYear';
import PayloadPieChart from './PayloadPie';
// import CustomerChart from './CustomerChart';
import PayloadChart from './PayloadChart';

import * as actions from '../store/actions/index';

let customerPieChart;
let organizationPieChart;

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
                <Grid container spacing = {2} direction = 'column'>
                    <Grid item >
                <Grid container spacing = {2}>
                    <Grid item lg = {8}>

                        <Grid container spacing = {2} justify="space-between" alignItems="stretch">
                            <Grid item xl = {5} lg = {4}>
                                <MetricList
                                    launchesLength = {this.props.launches.length}
                                    missionLength = {this.props.missions.length}
                                    refreshLaunch = {this.props.getLaunches}
                                    refreshMissions = {this.props.getMissions}
                                ></MetricList>
                            </Grid>

                            <Grid item xl = {7} lg = {8}>
                                <FeatureLaunch launchData = {this.props.featureLaunch}>
                            </FeatureLaunch>
                            </Grid>
                            <Grid item lg = {12}>
                                <LaunchPerYear
                                    launchData = {this.props.launches}
                                ></LaunchPerYear>
                            </Grid>
                        </Grid>

                    </Grid>


                    <Grid item lg = {4}>
                        <UpcomingLaunch
                            launchData = {this.props.upcomingLaunches}>
                        </UpcomingLaunch>
                    </Grid>

                </Grid>
                </Grid>
                {/* End of First Row */}

                {/* Second Row */}
                <Grid item>
                <Grid container spacing = {2}>
                    <Grid item lg = {6} xl = {8}>
                        <Grid container spacing = {2}>
                            <Grid item lg = {12} xl = {6}>
                                <PayloadChart
                                    chartData = {this.props.topPayloadData}>
                                </PayloadChart>
                            </Grid>
                            <Grid item lg = {12} xl = {6}>
                                <PayloadPieChart
                                    title = {'Customers by Nationality'}
                                    chartId = {'nationalityPieChart'}
                                    launchData = {this.props.launches}
                                    canvasReference = {organizationPieChart}>
                                </PayloadPieChart>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item lg = {6} xl = {4}>
                        <RecentLaunches
                            launchData = {this.props.recentLaunches}>
                        </RecentLaunches>
                    </Grid>
                </Grid>
                </Grid>
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
