import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-config';

export const getPayloads = () => {

    return dispatch => {
        axios.get('/payloads')
        .then(response => {
            if(response.status === 200) {
                dispatch(setPayloads(response.data));
            }
        })
        .catch( error => {
            // dispatch(action.showFeedback('Fail to Get Last Updated'));
        })
    }
}

export const setPayloads = (payloadList) => {
    return {
        type: actionTypes.SET_PAYLOADS,
        payloadList: payloadList
    }
}