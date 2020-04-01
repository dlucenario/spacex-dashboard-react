import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-config';

export const getMissions = () => {

    return dispatch => {
        axios.get('/missions?filter=mission_id')
        .then(response => {
            if(response.status === 200) {
                dispatch(setMissions(response.data));
            }
        })
        .catch( error => {
            // dispatch(action.showFeedback('Fail to Get Last Updated'));
        })
    }
}

export const setMissions = (missionList) => {
    return {
        type: actionTypes.SET_MISSIONS,
        missionList: missionList
    }
}