import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-config';

export const getShips = () => {

    return dispatch => {
        axios.get('/ships?filter=ship_id')
        .then(response => {
            if(response.status === 200) {
                dispatch(setShips(response.data));
            }
        })
        .catch( error => {
            // dispatch(action.showFeedback('Fail to Get Last Updated'));
        })
    }
}

export const setShips = (shipList) => {
    return {
        type: actionTypes.SET_SHIPS,
        shipList: shipList
    }
}