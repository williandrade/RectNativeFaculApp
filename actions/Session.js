import * as Actions from '../constants/ActionTypes';

export function addPoint(points) {
    return { type: Actions.SESSION_ADD_POINT, value: points }
}

export function clearPoint(points) {
    return { type: Actions.SESSION_CLEAR_POINT }
}

export function setClassLevel(classLevel) {
    return { type: Actions.SESSION_SET_CLASS_LEVEL, value: classLevel }
}

export function setHouse(house) {
    return { type: Actions.SESSION_SET_HOUSE, value: house }
}

export function setName(name) {
    return { type: Actions.SESSION_SET_NAME, value: name }
}
