import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    rockets: []
}

const setRockets = (state,action) => {

    return updateObject(state, {
        rockets: action.rocketList
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ROCKETS: return setRockets(state,action);
        default: return state;
    }
};

export default reducer;