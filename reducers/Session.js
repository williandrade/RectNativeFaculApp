import * as Actions from '../constants/ActionTypes';

const initialState = {
    points: 0,
    classLevel: 4,
    name: '',
    house: 1
};

export function Session(state = initialState, action) {
    let newState = { ...state };

    switch (action.type) {
        case Actions.SESSION_SET_CLASS_LEVEL:
            newState.classLevel = action.value;
            return newState;
        case Actions.SESSION_ADD_POINT:
            newState.points = state.points + action.value;
            return newState;
        case Actions.SESSION_CLEAR_POINT:
            newState.points = 0;
            return newState;
        case Actions.SESSION_SET_HOUSE:
            newState.house = action.value;
            return newState;
        case Actions.SESSION_SET_NAME:
            newState.name = action.value;
            return newState;
        default:
            return state;
    }
}
