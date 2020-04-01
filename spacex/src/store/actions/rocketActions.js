import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-config';

export const getRockets = () => {

    return dispatch => {
        axios.get('/rockets?filter=id')
        .then(response => {
            if(response.status === 200) {
                dispatch(setRockets(response.data));
            }
        })
        .catch( error => {
            // dispatch(action.showFeedback('Fail to Get Last Updated'));
        })
    }
}

export const setRockets = (rocketList) => {
    return {
        type: actionTypes.SET_ROCKETS,
        rocketList: rocketList
    }
}