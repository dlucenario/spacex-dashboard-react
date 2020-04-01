import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ships: []
}

const setShips = (state,action) => {
    return updateObject(state, {
        ships: action.shipList
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SHIPS: return setShips(state,action);
        default: return state;
    }
};

export default reducer;