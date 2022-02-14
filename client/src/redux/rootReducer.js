import {combineReducers} from "redux"
import { appReducer } from "./reducers/appReducer"
import { skillsReducer } from "./reducers/skillsReducer"

export const rootReducer = combineReducers({
    skillsReducer, 
    appReducer
})