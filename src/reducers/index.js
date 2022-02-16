import {combineReducers} from "redux";
import employeeReducer from "./employeeReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
    employee: employeeReducer,
    modal: modalReducer,
})

export default rootReducer