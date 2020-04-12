import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    payloads: [],
    payloadTopFive: []
}

const setPayload = (state,action) => {

    const filteredPayload = action.payloadList.map( (element) => {
        const filteredElement = {
            payloadID: element.payload_id,
            kilograms: element.payload_mass_kg
        }
        return filteredElement;
    }).filter( (element) => {
        return element.kilograms !== null
    }).sort(function(a,b) {
        return b.kilograms - a.kilograms;
    });

    //must have a grouping function
    //will have to rework this - data is showing same kilograms
    const unique = [...new Map(filteredPayload.map(item => [item['kilograms'], item])).values()];



    return updateObject(state, {
        payloads: action.payloadList,
        payloadTopFive: unique.slice(0,10)
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PAYLOADS: return setPayload(state,action);
        default: return state;
    }
};

export default reducer;