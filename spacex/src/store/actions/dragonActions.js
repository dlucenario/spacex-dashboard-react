import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-config';

export const getDragons = () => {

    return dispatch => {
        axios.get('/dragons?filter=id')
        .then(response => {
            if(response.status === 200) {
                dispatch(setDragons(response.data));
            }
        })
        .catch( error => {
            // dispatch(action.showFeedback('Fail to Get Last Updated'));
        })
    }
}

export const setDragons = (dragonList) => {
    return {
        type: actionTypes.SET_DRAGONS,
        dragonList: dragonList
    }
}