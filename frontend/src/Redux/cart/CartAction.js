import { EMPTY_CART, REMOVE_ITEM, SET_CART, SET_QUANTITY } from "./CartActionTypes"
export const addQuantity = (payload) =>{
    return {
        type:SET_QUANTITY,
        payload
    }
}
export const deleteItem = (payload) =>{
    return{
        type:REMOVE_ITEM,
        payload
    }
}
export const emptyCart = () =>{
    return{
        type:EMPTY_CART,
        payload:{message:"emptying the cart"}
    }
}
export const setCart = (payload) =>{
    return{
        type:SET_CART,
        payload
    }
}