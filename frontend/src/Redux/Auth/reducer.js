import { accesData, saveData } from "../../Utils/appLocalStorage";
import * as types from "./actionTypes";
const initialState = {
    isAuth: accesData('isAuth') || false,
    isAdmin: accesData('isUserAdmin') || false,
    token: accesData('token') || '',
    isLoading: false,
    isError: false,
    message: '',
    user: [],
    users: [],
}

const reducer = (oldstate = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.USER_LOGIN_REQUEST: return { ...oldstate, isLoading: true };

        case types.USER_LOGIN_SUCCESS:
            let isUserAuth = true;
            saveData('isAuth', isUserAuth);

            let isUserAdmin = payload.isAdmin;
            saveData('isUserAdmin', isUserAdmin)

            let userToken = payload.token;
            saveData('token', userToken)

            return { ...oldstate, isLoading: false, isAuth: isUserAuth, message: payload.msg, token: userToken, isAdmin: isUserAdmin };

        case types.USER_LOGIN_FAILURE:
            isUserAuth = false;
            saveData('isAuth', isUserAuth);

            isUserAdmin = false;
            saveData('isUserAdmin', isUserAdmin);

            userToken = "";
            saveData('token', userToken)

            return { ...oldstate, isLoading: false, isError: true, isAuth: isUserAuth, token: userToken, isAdmin: isUserAdmin };

        case types.USER_DELETE_REQUEST: return { ...oldstate, isLoading: true };

        case types.USER_DELETE_SUCCESS: return { ...oldstate, isLoading: false };

        case types.USER_DELETE_FAILURE: return { ...oldstate, isLoading: false, isError: true, data: [], isAdmin: false };

        case types.USER_DATA_REQUEST: return { ...oldstate, isLoading: true };

        case types.USER_DATA_SUCCESS: return { ...oldstate, isLoading: false, isAdmin: payload.status, users: payload.users, user: payload.user };

        case types.USER_DATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, users: [], user: [] , isAdmin: false, isAuth: false };

        case types.USER_SIGNOUT_SUCCESS: return { isAuth: false, isLoading: false, isError: false };

        default: return oldstate;
    }
};
export { reducer }
