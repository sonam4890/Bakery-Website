import * as actionTypes from './actionTypes';

const initialState = {
    error: null,
    authenticated: false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state, authenticated: true
            };
        case actionTypes.LOGIN_FAILED:
            return {
                ...state, error: action.error
            }  
        case actionTypes.SIGN_UP_SUCCESS:
            return {
                ...state, authenticated: true
            };
        case actionTypes.SIGN_UP_FAILED:
            return {
                ...state, error: action.error
            }  
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state, authenticated: false, error: null
            };
        default:
            return {...state, }   
    }
} 

export default reducer;