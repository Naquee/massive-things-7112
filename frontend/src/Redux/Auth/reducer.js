
import { accesData, saveData } from "../../Utils/appLocalStorage";
import * as types from "./actionTypes";

const initialState = {
    isAuth: accesData('isAuth') || false,
    isAdmin: false,
    token: accesData('token') || '',
    isLoading: false,
    isError: false,
    message: '',
    userDetails: [],
    data: []
}

const reducer = (oldstate = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.USER_LOGIN_REQUEST: return { ...oldstate, isLoading: true };

        case types.USER_LOGIN_SUCCESS:
            let isUserAuth = true;
            saveData('isAuth', isUserAuth);

            let userToken = payload.token;
            saveData('token', userToken)

            return { ...oldstate, isLoading: false, isAuth: isUserAuth, message: payload.msg, token: userToken };

        case types.USER_LOGIN_FAILURE:
            isUserAuth = false;
            saveData('isAuth', isUserAuth);

            userToken = "";
            saveData('token', userToken)

            return { ...oldstate, isLoading: false, isError: true, isAuth: isUserAuth, token: userToken };

        case types.USER_SIGNUP_REQUEST: return { ...oldstate, isLoading: true };

        case types.USER_SIGNUP_SUCCESS: return { ...oldstate, isLoading: false, message: payload };

        case types.USER_SIGNUP_FAILURE: return { ...oldstate, isLoading: false, isError: true, message: payload };

        case types.USER_DELETE_REQUEST: return { ...oldstate, isLoading: true };

        case types.USER_DELETE_SUCCESS: return { ...oldstate, isLoading: false};

        case types.USER_DELETE_FAILURE: return { ...oldstate, isLoading: false, isError: true, data: [], isAdmin: false };

        case types.USER_DATA_REQUEST: return { ...oldstate, isLoading: true };

        case types.USER_DATA_SUCCESS: return { ...oldstate, isLoading: false, data: payload.data, isAdmin: payload.status, userDetails: payload.userDetails };

        case types.USER_DATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, data: [], isAdmin: false, isAuth: false };

        case types.USER_SIGNOUT_SUCCESS: return { isAuth: false, isLoading: false, isError: false };

        default: return oldstate;
    }
};
export { reducer }