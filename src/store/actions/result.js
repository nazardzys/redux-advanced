import * as actionTypes from './actionTypes';

export const saveResult = result => {
    // const updatedResult = result * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result
    };
};

export const storeResult = result => {
    return (dispatch, getState) => {
        setTimeout(() => {
            console.log('getState()', getState()); // getting an old state
            dispatch(saveResult(result));
        }, 2000);
    };
};

export const deleteResult = id => {
    return {
        type: actionTypes.DELETE_RESULT,
        id
    };
};