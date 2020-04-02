import React from 'react';
import  { connect } from 'react-redux';

import * as actions from '../store/actions/index';
import Grid from '@material-ui/core/Grid';
import LaunchList from './LaunchList';
import LaunchMetric from './LaunchMetric';
import LaunchItem from './LaunchItem';

import { Route } from 'react-router-dom';

class Launch extends React.Component{

    componentDidMount() {
        this.props.getLaunchList();
        //check for empty
        //this.props.getOneLaunch(this.props.match.params.id);
        //console.log('hehe');
    }

    render() {
        return(
            <div>
                <Grid container spacing = {2}>
                    <Grid item lg = {8}>
                        <LaunchList
                            launchList = {this.props.launches}
                        ></LaunchList>
                    </Grid>
                    <Grid item lg = {4}>
                        <LaunchMetric
                            upcomingLaunchLength = {this.props.upcomingLaunchLength}
                            finishedLaunchLength = {this.props.finishedLaunchLength}
                            refreshLaunch = {this.props.getLaunchList}
                        ></LaunchMetric>
                    </Grid>
                </Grid>

                <Route path="/launch/:id" render = {(props)=> (
                    <LaunchItem  key={props.match.params.id} id = {props.match.params.id}></LaunchItem>
                )}>
                </Route>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        launches: state.launchReducer.launches,
        upcomingLaunchLength: state.launchReducer.upcomingLaunchLength,
        finishedLaunchLength: state.launchReducer.finishedLaunchLength,
        oneLaunch: state.launchReducer.oneLaunch
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getLaunchList: () => dispatch(actions.getLaunchListDetailed()),
        getUpcomingLaunches: (all) => dispatch(actions.getUpcomingLaunches(all)),
        getOneLaunch: (id) => dispatch(actions.getOneLaunch(id))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Launch);
