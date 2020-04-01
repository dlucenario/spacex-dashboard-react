import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-config';

export const getCores = () => {

    return dispatch => {
        axios.get('/cores?filter=core_serial')
        .then(response => {
            if(response.status === 200) {
                dispatch(setCores(response.data));
            }
        })
        .catch( error => {
            // dispatch(action.showFeedback('Fail to Get Last Updated'));
        })
    }
}

export const setCores = (coreList) => {
    return {
        type: actionTypes.SET_CORES,
        coreList: coreList
    }
}