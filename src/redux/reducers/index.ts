import { combineReducers } from "redux";
import VehicleReducer from "./vehicleReducer";


const reducers = combineReducers({
    vehicles: VehicleReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>