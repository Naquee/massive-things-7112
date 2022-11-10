import axios from "axios";
import * as types from './actionTypes';

const {REACT_APP_API_URL} = process.env;

const userAuthentication = (payload) => (dispatch) => {
    dispatch({ type: types.USER_LOGIN_REQUEST });
    return axios.post(`${REACT_APP_API_URL}/member/`, payload).then((res) => {
        return dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
    }).catch((err) => {
        return dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
    })
}

export { userAuthentication}

