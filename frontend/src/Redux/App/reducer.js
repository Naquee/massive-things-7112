
import * as types from "./actionTypes";

const initialState = {
    dashProducts: [],
    products: [],
    address: [],
    isLoading: false,
    isError: false,
    message: '',
    cart: []
}

const reducer = (oldstate = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_DATA_REQUEST: return { ...oldstate, isLoading: true };

        case types.GET_DATA_SUCCESS: return { ...oldstate, isLoading: false, dashProducts: payload.productsData, address: payload.address };

        case types.GET_DATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, dashProducts: [] };

        case types.GET_CART_REQUEST: return { ...oldstate, isLoading: true };

        case types.GET_CART_SUCCESS: return { ...oldstate, isLoading: false, cart: payload.cart };

        case types.GET_CART_FAILURE: return { ...oldstate, isLoading: false, isError: true, cart: [] };

        case types.PATCH_CART_REQUEST: return { ...oldstate, isLoading: true };

        case types.PATCH_CART_SUCCESS: return { ...oldstate, isLoading: false};

        case types.PATCH_CART_FAILURE: return { ...oldstate, isLoading: false, isError: true, cart: [] };

        case types.POST_CART_REQUEST: return { ...oldstate, isLoading: true };

        case types.POST_CART_SUCCESS: return { ...oldstate, isLoading: false};

        case types.POST_CART_FAILURE: return { ...oldstate, isLoading: false, isError: true, cart: [] };

        case types.DELETE_CART_REQUEST: return { ...oldstate, isLoading: true };

        case types.DELETE_CART_SUCCESS: return { ...oldstate, isLoading: false };

        case types.DELETE_CART_FAILURE: return { ...oldstate, isLoading: false, isError: true, cart: [] };

        case types.GET_PRODUCTS_REQUEST: return { ...oldstate, isLoading: true };

        case types.GET_PRODUCTS_SUCCESS: return { ...oldstate, isLoading: false, products: payload };

        case types.GET_PRODUCTS_FAILURE: return { ...oldstate, isLoading: false, isError: true, products: [] };

        case types.PATCH_DATA_REQUEST: return { ...oldstate, isLoading: true };

        case types.PATCH_DATA_SUCCESS: return { ...oldstate, isLoading: false, isAuth: true, token: payload };

        case types.PATCH_DATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, dashProducts: [] };

        case types.POST_DATA_REQUEST: return { ...oldstate, isLoading: true };

        case types.POST_DATA_SUCCESS: return { ...oldstate, isLoading: false, isAuth: true, token: payload };

        case types.POST_DATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, isAuth: false, token: "" };

        case types.DELETE_DATA_REQUEST: return { ...oldstate, isLoading: true };

        case types.DELETE_DATA_SUCCESS: return { ...oldstate, isLoading: false };

        case types.DELETE_DATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, dashProducts: [] };

        default: return oldstate;
    }
};
export { reducer }
