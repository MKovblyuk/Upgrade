import {combineReducers} from "redux"
import { appReducer } from "./reducers/appReducer"
import { skillsReducer } from "./reducers/skillsReducer"
import { profileReducer } from "./reducers/profileReducer"
import { todoReducer } from "./reducers/todoReducer"

export const rootReducer = combineReducers({
    skillsReducer, 
    appReducer,
    profileReducer,
    todoReducer
})