import { ADD_TASK_TO_COMPLETED, ADD_TASK_TO_UNCOMPLETED, DELETE_TASK_FROM_COMPLETED, DELETE_TASK_FROM_UNCOMPLETED } from "../actionsTypes"

const initialState = {
    uncompletedTasks: [],
    completedTasks: []
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK_TO_UNCOMPLETED:
            return state
        case DELETE_TASK_FROM_UNCOMPLETED:
            return state
        case ADD_TASK_TO_COMPLETED:
            return state
        case DELETE_TASK_FROM_COMPLETED:
            return state
        default:
            return state
    }
}