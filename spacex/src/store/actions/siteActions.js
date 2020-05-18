import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-config';

export const getLaunchSites = (siteId,initialize) => {
    return dispatch => {
        axios.get('/launchpads')
        .then(response => {
            if(response.status === 200) {

                dispatch(setLaunchSites(response.data));

                if(initialize) {
                    dispatch(setActiveSite(response.data[0],true));
                } else if(siteId !== undefined) {
                    for(let x = 0; x < response.data.length; x++) {
                        if(siteId === response.data[x].site_id) {
                            dispatch(setActiveSite(response.data[x],true));
                            break;
                        }
                    }
                }
            }
        })
        .catch( error => {
            // dispatch(action.showFeedback('Fail to Get Last Updated'));
        })
    }
}

export const getLandSites = (siteId,initialize) => {

    return dispatch => {
        axios.get('/landpads')
        .then(response => {
            if(response.status === 200) {
                dispatch(setLandSites(response.data));
                console.log(initialize);
                console.log(siteId);
                if(initialize) {
                    dispatch(setActiveSite(response.data[0],true));
                } else if(siteId !== undefined) {
                    for(let x = 0; x < response.data.length; x++) {
                        if(siteId === response.data[x].id) {
                            dispatch(setActiveSite(response.data[x],false));
                            break;
                        }
                    }
                }

            }
        })
        .catch( error => {
            // dispatch(action.showFeedback('Fail to Get Last Updated'));
        })
    }
}

export const setActiveSite = (site,launchMode) => {

    const action = launchMode ? actionTypes.SET_ACTIVE_LAUNCH_SITE : actionTypes.SET_ACTIVE_LAND_SITE;
    console.log(action);
    return dispatch => {
        dispatch({
            type: action,
            site: site
        })
    }

}

export const setLandSites = (siteList) => {
    return {
        type: actionTypes.SET_LAND_SITES,
        landSites: siteList
    }
}

export const setLaunchSites = (siteList) => {
    return {
        type: actionTypes.SET_LAUNCH_SITES,
        launchSites: siteList
    }
}