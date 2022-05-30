import { ActionType } from "../action-types";
import { Action } from "../actions/index"


const initialState: InitialStateResponse ={
    data : {items:[]},
    valueForProvider : "",
    valueForVehicleAttribute: "",
    ids: [],
    pageSize: 5,
    visible: false,
    showDeleteButtonProvider: false,
    passProvider : "",
    errorStatus:"",
    errorVisible: false

}

interface InitialStateResponse {
    data : Data,
    valueForProvider : string,
    valueForVehicleAttribute: string,
    ids: string[]
    pageSize: number,
    visible: boolean,
    showDeleteButtonProvider: boolean,
    passProvider: string,
    errorStatus: string,
    errorVisible: boolean
}

interface Data {
    items: Item[]
}

interface Item {
    attributeConfigurations: any[],
}


export type {
    Data,
    Item
}


const removeFromArray = (array:string[], element:string) => {
    const index = array.indexOf(element);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

    const VehicleReducer=(state:InitialStateResponse = initialState, action: Action)=>{
    switch(action.type){
        case ActionType.SET_DATA:
            return {
                ...state,
                data:action.payload,
            };
            case ActionType.FILTER_VALUE_BY_PROVIDER:
                return{
                ...state,
                valueForProvider: action.payload
                }
            case ActionType.FILTER_VALUE_BY_VEHICLE_ATTRIBUTE:
                return{
                ...state,
                valueForVehicleAttribute: action.payload
                }
            case ActionType.SET_NUMBER:
                return{
                    ...state,
                    data: state.data.items
                        .map(item => item.attributeConfigurations
                        .filter(attributeConfiguration => attributeConfiguration.priority === action.payload)
                        .map(attributeConfiguration => attributeConfiguration.priority = action.payload))
                }
            // case ActionType.SET_ID_ELEMENT: //set id element visibility
            //     let idsToAdd = state.ids.slice();  //kopiowanie tablicy- array
            //      idsToAdd.push(action.payload);
            //     return{
            //         ...state,
            //         ids: idsToAdd
            //     }
            // case ActionType.REMOVE_ID_ELEMENT://remove id element visibility
            //     let idsToRemove = removeFromArray(state.ids.slice(), action.payload);
            //     return{
            //         ...state,
            //         ids: idsToRemove
            //     }
            // case ActionType.SET_VISIBLE:
            //     return{
            //         ...state,
            //         visible:action.payload,
            //     }
            // case ActionType.SHOW_DELETE_BUTTON_PROVIDER:
            //     return{
            //         ...state,
            //         showDeleteButtonProvider:action.payload,
            //     }
            // case ActionType.PASS_PROVIDER:
            //     return{
            //         ...state,
            //         passProvider:action.payload,
            //     }
            // case ActionType.SET_ERROR_STATUS:
            //     return{
            //         ...state,
            //         errorStatus:action.payload,
            //     }
            // case ActionType.SET_ERROR_VISIBLE:
            //     return{
            //         ...state,
            //         errorVisible:action.payload,
            //     }   
        default:
            return state;
    }
}


export default VehicleReducer;




