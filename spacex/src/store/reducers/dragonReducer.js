import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    dragons: []
}

const setDragons = (state,action) => {
    return updateObject(state, {
        dragons: action.dragonList
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DRAGONS: return setDragons(state,action);
        default: return state;
    }
};

export default reducer;