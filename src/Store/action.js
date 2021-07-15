import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loginSuccess = () => {
    return {
        type: actionTypes.LOGIN_SUCCESS
    }
}

export const loginFailed = (err) => {
    return {
        type: actionTypes.LOGIN_FAILED,
        error: err,
    }
}

export const logoutSuccess = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS
    }
}

// export const logoutFailed = (err) => {
//     return {
//         type: actionTypes.LOGOUT_FAILED,
//         error: err,
//     }
// }

export const signUpSuccess = () => {
    return {
        type: actionTypes.SIGN_UP_SUCCESS
    }
}

export const signUpFailed = (err) => {
    return {
        type: actionTypes.SIGN_UP_FAILED,
        error: err,
    }
}

export const login = (user) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/login', user)
        .then((res) => {
            if(res.data.statusCode === 200){
                localStorage.setItem('jwt', res.data.token );
                dispatch(loginSuccess());
            }else{
                dispatch(loginFailed(res));
            }
        })
        .catch((err) => {
            console.log(err)
            dispatch(loginFailed(err));
        });
    }
}

export const signUp = (user) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/signUp', user)
        .then((res) => {
            if(res.data.statusCode === 200){
                localStorage.setItem('jwt', res.data.token );
                dispatch(signUpSuccess());
            }else{
                dispatch(signUpFailed(res));
            }
        })
        .catch((err) => {
            dispatch(signUpFailed(err));
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        let token = localStorage.getItem('jwt');
        
        axios.post('http://localhost:5000/logout', {token})
        .then((res) => {
            console.log(res);
            if(res.data.statusCode === 200){
                localStorage.removeItem('jwt');
                dispatch(logoutSuccess());
                alert('Logout successfull')
            }else{
                alert('Logout failed')
            }
        })
        .catch((err) => {
            alert('Logout failed')
        });
    }
}

// export const cart = async() => {
//     let token = localStorage.getItem('jwt');
//     console.log(token);
//     axios.post('http://localhost:5000/logout', {token})
//     .then(res => {
//         console.log(res)
//     })
//     .carch(err => console.log(err))
// }