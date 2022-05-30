import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"

// export const setData = (data) => {
//     return {
//         type: ActionTypes.SET_DATA,
//         payload: data,
//     };
// }; 

export const setData = (data: string[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_DATA,
            payload: data
        })
    }
}


export const filterValueByProvider = (inputValue: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FILTER_VALUE_BY_PROVIDER,
            payload: inputValue
        })
    }
}


export const filterValueByVehicleAttribute = (inputValue: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FILTER_VALUE_BY_VEHICLE_ATTRIBUTE,
            payload: inputValue
        })
    }
}

export const setNumber = (numer: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_NUMBER,
            payload: numer
        })
    }
}

export const setElementId = (ids: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_ID_ELEMENT,
            payload: ids
        })
    }
}

export const removeElementId = (ids: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.REMOVE_ID_ELEMENT,
            payload: ids
        })
    }
}