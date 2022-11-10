
import axios from "axios";
import * as types from "./actionTypes";



const getVeg = (params) => (dispatch) => {
    dispatch({type: types.GET_VEG_DATA_REQUEST})
    return axios.get("http://localhost:8000/veg", params).then((r) => {
        dispatch({type: types.GET_VEG_DATA_SUCCESS, payload: r.data});
    })
    .catch((e) => {
        dispatch({type: types.GET_VEG_DATA_FAILURE, payload: e});
    })
}

export { getVeg }