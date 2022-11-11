
import * as types from "./actionTypes";

const initialState = {
    dashProducts: [],
    products:[],
    isLoading: false,
    isError: false,
    message: ''
}

const reducer = (oldstate = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_DATA_REQUEST: return { ...oldstate, isLoading: true };

        case types.GET_DATA_SUCCESS: return { ...oldstate, isLoading: false, dashProducts: payload.productsData};

        case types.GET_DATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, dashProducts: [] };

        case types.GET_PRODUCTS_REQUEST: return { ...oldstate, isLoading: true};

        case types.GET_PRODUCTS_SUCCESS: return { ...oldstate, isLoading: false, products: payload };

        case types.GET_PRODUCTS_FAILURE: return { ...oldstate, isLoading: false, isError: true, products:[] };

        case types.PATCH_DATA_REQUEST: return { ...oldstate, isLoading: true };

        case types.PATCH_DATA_SUCCESS: return { ...oldstate, isLoading: false, isAuth: true, token: payload };

        case types.PATCH_DATA_FAILURE: return { ...oldstate, isLoading: false, isError: true,  dashProducts: []};

        case types.POST_DATA_REQUEST: return { ...oldstate, isLoading: true };

        case types.POST_DATA_SUCCESS: return { ...oldstate, isLoading: false, isAuth: true, token: payload };

        case types.POST_DATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, isAuth: false, token: "" };

        case types.DELETE_DATA_REQUEST: return { ...oldstate, isLoading: true };

        case types.DELETE_DATA_SUCCESS: return { ...oldstate, isLoading: false };

        case types.DELETE_DATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, dashProducts: []};

        default: return oldstate;
    }
};
export { reducer }
