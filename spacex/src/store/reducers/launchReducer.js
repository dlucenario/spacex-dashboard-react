import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

import { convertMonth } from '../../shared/utility';

const initialState = {
    launches: [],
    upcomingLaunches: [],
    recentLaunches: [],
    featureLaunch: {},
    oneLaunch: {},
    upcomingLaunchLength: 0,
    finishedLaunchLength: 0,
    launchListDetailed: []
}

const setLaunches = (state,action) => {

    const launchList = action.launchList.map( (element) => {
        const newDate = new Date(element.launch_date_unix * 1000);
        const tempDate = `${convertMonth(newDate.getMonth())} ${newDate.getDate()}, ${newDate.getFullYear()}`;
        
        return {
            flightNumber: element.flight_number,
            launchDate: tempDate,
            nationality: element.rocket.second_stage.payloads[0].nationality
            
        }
    });
    return updateObject(state, {
        launches: launchList
    });
}

const setUpcomingLaunches = (state,action) => {
    const upcomingLaunches = action.upcomingLaunches.map( (element) => {
        const newDate = new Date(element.launch_date_unix * 1000);
        
        const tempDate = `${convertMonth(newDate.getMonth())} ${newDate.getDate()}, ${newDate.getFullYear()}`;
        return {
            mission_name: element.mission_name,
            date: tempDate,
            rocket: element.rocket.rocket_name,
            flightNumber: element.flight_number
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
            land_success: element.rocket.first_stage.cores[0].land_success,
            missionPatch: element.links['mission_patch_small'],
            flightNumber: element.flight_number
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

const setLaunchListDetailed = (state,action) => {

    let upcomingLaunchLength = 0;
    let finishedLaunchLength = 0;

    const launchList = action.launchList.map( (element) => {
        const newDate = new Date(element.launch_date_unix * 1000);
        const tempDate = `${convertMonth(newDate.getMonth())} ${newDate.getDate()}, ${newDate.getFullYear()}`;

        if(element.upcoming === true) {
            upcomingLaunchLength++
        } else {
            finishedLaunchLength++;
        }

        return {
            flight_number: element.flight_number,
            mission_name: element.mission_name,
            upcoming: element.upcoming,
            date: tempDate,
            rocket: element.rocket.rocket_name,
            customer: element.rocket.second_stage.payloads[0].customers[0]
        }
    });

    return updateObject(state, {
        launchListDetailed: launchList,
        upcomingLaunchLength: upcomingLaunchLength,
        finishedLaunchLength: finishedLaunchLength
    });

}

const setOneLaunch = (state,action) => {

    const newDate = new Date(action.oneLaunch.launch_date_unix * 1000);
    const tempDate = `${convertMonth(newDate.getMonth())} ${newDate.getDate()}, ${newDate.getFullYear()}`;

    // //for convenient traversing
    const launchTable = {
        launchDate: {text: 'Launch Date', value: tempDate},
        rocket: {text: 'Rocket', value: action.oneLaunch.rocket.rocket_name},
        core: {text: 'Core', value: action.oneLaunch.rocket.first_stage.cores[0].core_serial},
        ships : {text: 'Ships', value:action.oneLaunch.ships},
        launchSite: {text: 'Launch Site', value: action.oneLaunch.launch_site.site_name}
    }

    const payloadTable = {
        payload: {text: 'Payload', value: action.oneLaunch.rocket.second_stage.payloads[0].payload_id},
        customer: {text: 'Customer', value: action.oneLaunch.rocket.second_stage.payloads[0].customers[0]},
        nationality : {text:'Nationality', value: action.oneLaunch.rocket.second_stage.payloads[0].nationality},
        payloadType :  {text: 'Payload Type', value: action.oneLaunch.rocket.second_stage.payloads[0].payload_type},
        payloadWeight :  {text:'Payload Weight(KG)', value: action.oneLaunch.rocket.second_stage.payloads[0].payload_mass_kg},
    }

    const oneLaunchLinks = {
        reddit: action.oneLaunch.links.reddit_campaign,
        blog: action.oneLaunch.links.article_link,
        wiki: action.oneLaunch.links.wikipedia,
        rawData: `https://api.spacexdata.com/v3/launches/${action.oneLaunch.flight_number}?pretty=true`
    }

    const oneLaunch = {
        missionPatchLink: action.oneLaunch.links.mission_patch_small,
        flightNumber: action.oneLaunch.flight_number,
        launchSuccess: action.oneLaunch.launch_success,
        landSuccess: action.oneLaunch.rocket.first_stage.cores[0].land_success,
        missionName: action.oneLaunch.mission_name,
        missionId: action.oneLaunch.mission_id,
        details: action.oneLaunch.details,
        upcoming: action.oneLaunch.upcoming,
        payloadTable: payloadTable,
        launchTable: launchTable,
        videoId: action.oneLaunch.links.youtube_id,
        galleryLinks: action.oneLaunch.links.flickr_images,
        links: oneLaunchLinks
    }

    return updateObject(state, {
        oneLaunch: oneLaunch
    });
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LAUNCHES: return setLaunches(state,action);
        case actionTypes.SET_UPCOMING_LAUNCHES: return setUpcomingLaunches(state,action);
        case actionTypes.SET_RECENT_LAUNCHES: return setRecentLaunches(state,action);
        case actionTypes.SET_FEATURE_LAUNCH: return setFeatureLaunch(state,action);
        case actionTypes.SET_LAUNCHES_LIST: return setLaunchListDetailed(state,action);
        case actionTypes.SET_ONE_LAUNCH: return setOneLaunch(state,action);
        default: return state;
    }
};

export default reducer;