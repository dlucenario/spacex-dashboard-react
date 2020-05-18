import React from 'react';
import  { connect } from 'react-redux';

import * as actions from '../store/actions/index';
import Grid from '@material-ui/core/Grid';

import Fade from '@material-ui/core/Fade';

class Mission extends React.Component{

    componentDidMount() {
        this.props.getLaunchList();
    }

    render() {
        return(
            <Fade in = {true} timeout = {500}>
                <Grid container direction = 'row' spacing = {2}>
                    <Grid item xs = {12} lg = {12}>
                        <Grid container spacing = {2}>
                            <Grid item xs = {12} lg = {8}>

                            </Grid>
                            <Grid item xs = {12} lg = {4}>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs = {12} lg = {12}>

                    </Grid>
                </Grid>
            </Fade>
        )
    }
}

const mapStateToProps = state => {
    return {
        launches: state.launchReducer.launchListDetailed,
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

export default connect(mapStateToProps,mapDispatchToProps)(Mission);
