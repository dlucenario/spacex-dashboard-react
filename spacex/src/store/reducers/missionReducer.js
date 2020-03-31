import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    missions: []
}

const setMissions = (state,action) => {
    return updateObject(state, {
        missions: action.missionList
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MISSIONS: return setMissions(state,action);
        default: return state;
    }
};

export default reducer;