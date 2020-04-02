import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-config';

export const getLaunches = () => {
    //get the flight number only
    return dispatch => {
        axios.get('/launches?filter=flight_number')
        .then(response => {
            if(response.status === 200) {
                dispatch(setLaunches(response.data));
            }
        })
        .catch( error => {
            // dispatch(action.showFeedback('Fail to Get Last Updated'));
        })
    }
}

export const setLaunches = (launchList) => {
    return {
        type: actionTypes.SET_LAUNCHES,
        launchList: launchList
    }
}

export const getUpcomingLaunches = () => {
    
    return dispatch => {
        axios.get('/launches/upcoming?limit=5&filter=mission_name,launch_date_unix')
        .then(response => {
            if(response.status === 200) {
                dispatch(setUpcomingLaunches(response.data));
            }
        })
        .catch( error => {
            // dispatch(action.showFeedback('Fail to Get Last Updated'));
        })
    }
}

export const setUpcomingLaunches = (upcomingLaunches) => {
    return {
        type: actionTypes.SET_UPCOMING_LAUNCHES,
        upcomingLaunches: upcomingLaunches
    }
}

export const getRecentLaunches = () => {
    //get the flight number only
    return dispatch => {
        axios.get('/launches/past?limit=5&order=desc&filter=mission_name,launch_date_unix,launch_date_utc,launch_success,rocket')
        .then(response => {
            if(response.status === 200) {
                dispatch(setRecentLaunches(response.data));
            }
        })
        .catch( error => {
            // dispatch(action.showFeedback('Fail to Get Last Updated'));
        })
    }
}

export const setRecentLaunches = (recentLaunches) => {
    return {
        type: actionTypes.SET_RECENT_LAUNCHES,
        recentLaunches: recentLaunches
    }
}

export const getFeatureLaunch = () => {
    return dispatch => {
        axios.get('/launches/next')
        .then(response => {
            if(response.status === 200) {
                dispatch(setFeatureLaunch(response.data));
            }
        })
        .catch( error => {
            // dispatch(action.showFeedback('Fail to Get Last Updated'));
        })
    }
}

export const setFeatureLaunch = (featureLaunch) => {
    return {
        type: actionTypes.SET_FEATURE_LAUNCH,
        featureLaunch: featureLaunch
    }
}

export const getLaunchListDetailed = () => {
    return dispatch => {
        axios.get('/launches?filter=flight_number,mission_name,launch_date_unix,rocket,upcoming&order=desc')
        .then(response => {
            if(response.status === 200) {
                dispatch(setLaunchListDetailed(response.data));
            }
        })
        .catch( error => {
            // dispatch(action.showFeedback('Fail to Get Last Updated'));
        })
    }
}

export const setLaunchListDetailed = (launchList) => {
    return {
        type: actionTypes.SET_LAUNCHES_LIST,
        launchList: launchList
    }
}

export const getOneLaunch = (launchNumber) => {

    return dispatch => {
        axios.get(`/launches/${launchNumber}`)
        .then(response => {
            if(response.status === 200) {
                dispatch(setOneLaunch(response.data));
            }
        })
        .catch( error => {
            // dispatch(action.showFeedback('Fail to Get Last Updated'));
        })
    }
}

export const setOneLaunch = (oneLaunch) => {
    return {
        type: actionTypes.SET_ONE_LAUNCH,
        oneLaunch: oneLaunch
    }
}