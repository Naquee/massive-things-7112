
import * as types from "./actionTypes";

const initialState = {
    veg: [],
    isLoading: false,
    isError: false
};

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){

         case types.GET_VEG_DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            }

          case types.GET_VEG_DATA_SUCCESS:
             return {
                 ...state,
                 isLoading :false,
                 veg:payload,
                 isError: false
             }

          case types.GET_VEG_DATA_FAILURE:
             return {
                  ...state,
                  isLoading:false,
                  veg:[],
                  isError: true
             }

             default : 
                 return state
    }
}