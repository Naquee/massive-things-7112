import axios from "axios";
import * as types from './actionTypes';

const { REACT_APP_API_URL } = process.env;

const userAuthentication = (payload) => (dispatch) => {
    dispatch({ type: types.USER_LOGIN_REQUEST });
    return axios.post(`${REACT_APP_API_URL}/member/`, payload).then((res) => {
        return dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
    }).catch((err) => {
        return dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
    })
}

const userDelete = (payload) => (dispatch) => {
    dispatch({ type: types.USER_DELETE_REQUEST });
    return axios.delete(`${REACT_APP_API_URL}/delete/user/${payload.id}`).then((res) => {
        return dispatch({ type: types.USER_DELETE_SUCCESS, payload: res.data });
    }).catch((err) => {
        return dispatch({ type: types.USER_DELETE_FAILURE, payload: err });
    })
}

const userData = (payload) => (dispatch) => {
    dispatch({ type: types.USER_DATA_REQUEST });
    return axios.get(`${REACT_APP_API_URL}/dashboard/usersdata`, payload).then((res) => {
        if (!res.data.status) {
            return dispatch({ type: types.USER_DATA_FAILURE, payload: res.data });
        } else {
            return dispatch({ type: types.USER_DATA_SUCCESS, payload: res.data });
        }
    }).catch((err) => {
        return dispatch({ type: types.USER_DATA_FAILURE, payload: err });
    })
}

export { userAuthentication, userDelete, userData }

