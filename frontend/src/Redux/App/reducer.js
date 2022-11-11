
import * as types from "./actionTypes";

const initialState = {
    companyData: [],
    products: [],
    allProducts:[],
    companyImagesData: [],
    isLoading: false,
    isError: false,
    message: ''
}

const reducer = (oldstate = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_DATA_REQUEST: return { ...oldstate, isLoading: true };

        case types.GET_DATA_SUCCESS: return { ...oldstate, isLoading: false, products: payload.productsData};

        case types.GET_DATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, companyData: [], products: [], companyImagesData: [] };

        case types.GET_PRODUCTS_REQUEST: return { ...oldstate, isLoading: true};

        case types.GET_PRODUCTS_SUCCESS: return { ...oldstate, isLoading: false, allProducts: payload };

        case types.GET_PRODUCTS_FAILURE: return { ...oldstate, isLoading: false, isError: true, allProducts:[] };

        case types.PATCH_DATA_REQUEST: return { ...oldstate, isLoading: true };

        case types.PATCH_DATA_SUCCESS: return { ...oldstate, isLoading: false, isAuth: true, token: payload };

        case types.PATCH_DATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, companyData: [], products: [], companyImagesData: [] };

        case types.POST_DATA_REQUEST: return { ...oldstate, isLoading: true };

        case types.POST_DATA_SUCCESS: return { ...oldstate, isLoading: false, isAuth: true, token: payload };

        case types.POST_DATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, isAuth: false, token: "" };

        case types.DELETE_DATA_REQUEST: return { ...oldstate, isLoading: true };

        case types.DELETE_DATA_SUCCESS: return { ...oldstate, isLoading: false };

        case types.DELETE_DATA_FAILURE: return { ...oldstate, isLoading: false, isError: true, companyData: [], products: [], companyImagesData: [] };

        default: return oldstate;
    }
};
export { reducer }
