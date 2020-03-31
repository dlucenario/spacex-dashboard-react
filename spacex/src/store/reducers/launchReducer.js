import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

import { convertMonth } from '../../shared/utility';

const initialState = {
    launches: [],
    upcomingLaunches: [],
    recentLaunches: [],
    featureLaunch: {},
}

const setLaunches = (state,action) => {
    return updateObject(state, {
        launches: action.launchList
    });
}

const setUpcomingLaunches = (state,action) => {

    const upcomingLaunches = action.upcomingLaunches.map( (element) => {
        const newDate = new Date(element.launch_date_unix * 1000);
        
        const tempDate = `${convertMonth(newDate.getMonth())} ${newDate.getDate()}, ${newDate.getFullYear()}`;
        return {
            mission_name: element.mission_name,
            date: tempDate
        }
    });

    return updateObject(state, {
        upcomingLaunches: upcomingLaunches
    });
}

const setRecentLaunches = (state,action) => {

    const recentLaunches = action.recentLaunches.map( (element) => {
        const newDate = new Date(element.launch_date_unix * 1000);
        
        const tempDate = `${convertMonth(newDate.getMonth())} ${newDate.getDate()}, ${newDate.getFullYear()}`;
        return {
            mission_name: element.mission_name,
            date: tempDate,
            launch_success: element.launch_success,
            land_success: element.rocket.first_stage.cores[0].land_success
        }
    });

    return updateObject(state, {
        recentLaunches: recentLaunches
    });
}

const setFeatureLaunch = (state,action) => {

    const newDate = new Date(action.featureLaunch.launch_date_unix * 1000);
    const tempDate = `${convertMonth(newDate.getMonth())} ${newDate.getDate()}, ${newDate.getFullYear()}`;

    const featureLaunch = {
        launchDateUnix: action.featureLaunch.launch_date_unix,
        launchDate: tempDate,
        missionName: action.featureLaunch.mission_name,
        flightNumber: action.featureLaunch.flight_number,
        rocketName: action.featureLaunch.rocket.rocket_name,
        customerName: action.featureLaunch.rocket.second_stage.payloads[0].customers[0]
    };

    return updateObject(state, {
        featureLaunch: featureLaunch
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LAUNCHES: return setLaunches(state,action);
        case actionTypes.SET_UPCOMING_LAUNCHES: return setUpcomingLaunches(state,action);
        case actionTypes.SET_RECENT_LAUNCHES: return setRecentLaunches(state,action);
        case actionTypes.SET_FEATURE_LAUNCH: return setFeatureLaunch(state,action);
        default: return state;
    }
};

export default reducer;