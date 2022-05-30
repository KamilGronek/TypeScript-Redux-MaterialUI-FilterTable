import { ActionType } from "../action-types/index"


interface setDataAction {
    type: ActionType.SET_DATA
    payload: string[] 
}

interface filterValueByProviderAction {
    type: ActionType.FILTER_VALUE_BY_PROVIDER
    payload: string 
}

interface filterValueByValueVehicleAttributeAction {
    type: ActionType.FILTER_VALUE_BY_VEHICLE_ATTRIBUTE
    payload: string 
}

interface setNumberAction {
    type: ActionType.SET_NUMBER
    payload: string
}

interface setElementId {
    type: ActionType.SET_ID_ELEMENT
    payload: string   
}

interface removeElementId {
    type: ActionType.REMOVE_ID_ELEMENT
    payload: string  
}



export type Action = setDataAction | filterValueByProviderAction | filterValueByValueVehicleAttributeAction | 
setNumberAction | setElementId | removeElementId
