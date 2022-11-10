import { EMPTY_CART, REMOVE_ITEM, SET_CART, SET_QUANTITY } from "./CartActionTypes"
const initialState = {
    cart:[],
    haveitems:false
}
export const CartReducer = (state = initialState,{type,payload}) =>{
    switch (type){
        case SET_QUANTITY:{

            return {
                ...state,
                cart: state.cart.map(item =>{
                    if(item.id === payload.id){
                        item.quantity = payload.quantity
                    }
                    return item
                })
            }
        }
        case REMOVE_ITEM:{
            return {
                ...state,
                cart:state.cart.filter(item => item.id !== payload.id)
            }
        }
        case EMPTY_CART:{
            return {
                ...state,
                cart:[]
            }
        }
        case SET_CART:{
            return {
                ...state,
                cart:[...state.cart,payload]
            }
        }
        default:{
            return state
        }
    }
}