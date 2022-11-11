import axios from "axios";
import * as types from "./actionTypes";


const { REACT_APP_API_URL } = process.env;
const getVeg = (params) => (dispatch) => {
    dispatch({ type: types.GET_VEG_DATA_REQUEST })
    return axios.get("http://localhost:8000/products", params).then((r) => {
        dispatch({ type: types.GET_VEG_DATA_SUCCESS, payload: r.data });
    }).catch((err) => {
        dispatch({ type: types.GET_VEG_DATA_FAILURE, payload: err });
    })
}


const addProducts = (payload, headers) => (dispatch) => {
    dispatch({ type: types.POST_DATA_REQUEST });
    return axios.post(`${REACT_APP_API_URL}/dashboard/product/add`, payload, headers).then((res) => {
        return dispatch({ type: types.POST_DATA_SUCCESS, payload: res.data });
    }).catch((err) => {
        return dispatch({ type: types.POST_DATA_FAILURE, payload: err });
    })
}

const productData = (payload) => (dispatch) => {
    dispatch({ type: types.GET_DATA_REQUEST });
    return axios.get(`${REACT_APP_API_URL}/dashboard/products`, payload).then((res) => {
        return dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data });
    }).catch((err) => {
        return dispatch({ type: types.GET_DATA_FAILURE, payload: err });
    })
}


const productDelete = (payload, headers) => (dispatch) => {
    dispatch({ type: types.DELETE_DATA_REQUEST });
    return axios.delete(`${REACT_APP_API_URL}/dashboard/product/delete/${payload.id}`, headers).then((res) => {
        return dispatch({ type: types.DELETE_DATA_SUCCESS, payload: res.data });
    }).catch((err) => {
        return dispatch({ type: types.DELETE_DATA_FAILURE, payload: err });
    })
}

const getProducts = () => (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST });
    return axios.get(`${REACT_APP_API_URL}/data/products`).then((res) => {
        return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
    }).catch((err) => {
        return dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err });
    })
}

const addAddress = (payload, headers) => (dispatch) => {
    dispatch({ type: types.POST_DATA_REQUEST });
    return axios.post(`${REACT_APP_API_URL}/user/address/add`, payload, headers).then((res) => {
        return dispatch({ type: types.POST_DATA_SUCCESS, payload: res.data });
    }).catch((err) => {
        return dispatch({ type: types.POST_DATA_FAILURE, payload: err });
    })
}

const getAddress = (headers) => (dispatch) => {
    dispatch({ type: types.GET_DATA_REQUEST });
    return axios.get(`${REACT_APP_API_URL}/user/address/get`, headers).then((res) => {
        return dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data });
    }).catch((err) => {
        return dispatch({ type: types.GET_DATA_FAILURE, payload: err });
    })
}

export { getVeg, addProducts, productData, productDelete, getProducts, addAddress, getAddress }




