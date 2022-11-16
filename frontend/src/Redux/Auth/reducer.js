import { accesData, saveData } from "../../Utils/appLocalStorage";
import Cookies from 'js-cookie'
import * as types from "./actionTypes";
const initialState = {
    isAuth: Cookies.get('isAuth') || false,
    isAdmin: Cookies.get('isUserAdmin') || false,
    token: Cookies.get('token') || '',
    isLoading: false,
    isError: false,
    message: '',
    user: Cookies.get('user') || [],
    users: [],
}

let isUserAuth = false;
let userData = [];
let isUserAdmin = false;
let userToken = '';

const reducer = (oldstate = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.USER_LOGIN_REQUEST: return { ...oldstate, isLoading: true };

        case types.USER_LOGIN_SUCCESS:

            isUserAuth = payload.status;
            Cookies.set('isAuth', isUserAuth);

            userData = payload.user;
            Cookies.set('user', userData);

            isUserAdmin = payload.isAdmin;
            Cookies.set('isUserAdmin', isUserAdmin)

            userToken = payload.token;
            Cookies.set('token', userToken)

            return { ...oldstate, isLoading: false, isAuth: isUserAuth, message: payload.msg, token: userToken, isAdmin: isUserAdmin, user: userData };

        case types.USER_LOGIN_FAILURE:
            isUserAuth = false;
            userData = [];
            isUserAdmin = false;
            userToken = "";
            Cookies.remove('isAuth', false);
            Cookies.remove('user', []);
            Cookies.remove('isUserAdmin', false);
            Cookies.remove('token', '')

            return { ...oldstate, isLoading: false, isError: true, isAuth: isUserAuth, token: userToken, isAdmin: isUserAdmin };

        case types.USER_DELETE_REQUEST: return { ...oldstate, isLoading: true };

        case types.USER_DELETE_SUCCESS: return { ...oldstate, isLoading: false };

        case types.USER_DELETE_FAILURE: return { ...oldstate, isLoading: false, isError: true, data: [], isAdmin: false };

        case types.USER_DATA_REQUEST: return { ...oldstate, isLoading: true };

        case types.USER_DATA_SUCCESS: return { ...oldstate, isLoading: false, isAdmin: payload.status, users: payload.users, user: payload.user };

        case types.USER_DATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, users: [], user: [], isAdmin: false, isAuth: false };

        case types.USER_SIGNOUT_SUCCESS:
            Cookies.remove('isAuth', false);
            Cookies.remove('user', []);
            Cookies.remove('isUserAdmin', false);
            Cookies.remove('token', '')

            return { isAuth: false, isLoading: false, isError: false, isAdmin: false, user: [], token: '' };

        default: return oldstate;
    }
};
export { reducer }
