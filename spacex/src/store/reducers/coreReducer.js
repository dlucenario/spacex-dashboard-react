import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    cores: []
}

const setCores = (state,action) => {
    return updateObject(state, {
        cores: action.coreList
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CORES: return setCores(state,action);
        default: return state;
    }
};

export default reducer;