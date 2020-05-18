import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    launchSites: [],
    landSites: [],
    activeSite: {},
}

const setLaunchSites = (state,action) => {
    return updateObject(state, {
        launchSites: action.launchSites
    });
}

const setLandSites = (state,action) => {
    return updateObject(state, {
        landSites: action.landSites
    });
}

const setActiveLaunchSite = (state,action) =>{

    const detailTable = {
        attempt: {text: 'Attempted Launches', value: action.site.attempted_launches},
        success: {text: 'Successful Launches', value: action.site.successful_launches},
        region: {text: 'Region', value: action.site.location.region},
        lat: {text: 'Latitude', value: action.site.location.latitude},
        long: {text: 'longitude', value: action.site.location.longitude},
        misc: {text: 'Vehicles Launched', value: action.site.vehicles_launched}
    }

    const activeSite = {
        code: action.site.name,
        name: action.site.site_name_long,
        detail: action.site.details,
        status: action.site.status,
        wikiLink: action.site.wikipedia,
        detailTable: detailTable
    }

    return updateObject(state, {
        activeSite: activeSite
    });

}

const setActiveLandSite = (state,action) =>{

    const detailTable = {
        attempt: {text: 'Attempted Landings', value: action.site.attempted_landings},
        success: {text: 'Successful Landings', value: action.site.successful_landings},
        region: {text: 'Region', value: action.site.location.region},
        lat: {text: 'Latitude', value: action.site.location.latitude},
        long: {text: 'longitude', value: action.site.location.longitude},
        misc: {text: 'Landing Type', value: action.site.landing_type}
    }

    const activeSite = {
        code: action.site.id,
        name: action.site.full_name,
        detail: action.site.details,
        status: action.site.status,
        wikiLink: action.site.wikipedia,
        detailTable: detailTable
    }

    return updateObject(state, {
        activeSite: activeSite
    });

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LAUNCH_SITES: return setLaunchSites(state,action);
        case actionTypes.SET_LAND_SITES: return setLandSites(state,action);
        case actionTypes.SET_ACTIVE_LAUNCH_SITE: return setActiveLaunchSite(state,action);
        case actionTypes.SET_ACTIVE_LAND_SITE: return setActiveLandSite(state,action);
        default: return state;
    }
};

export default reducer;