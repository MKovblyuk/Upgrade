import {
    ADD_TASK_TO_COMPLETED, 
    ADD_TASK_TO_UNCOMPLETED, 
    DELETE_TASK_FROM_COMPLETED, 
    DELETE_TASK_FROM_UNCOMPLETED
} from "../actionsTypes"

export const addTaskToCompleted = () => {
    return {
        type: ADD_TASK_TO_COMPLETED
    }
}

export const deleteTaskFromCompleted = () => {
    return {
        type: DELETE_TASK_FROM_COMPLETED
    }
}

export const addTaskToUncopleted = () => {
    return {
        type: ADD_TASK_TO_UNCOMPLETED
    }
}

export const deleteTaskFromUncompleted = () => {
    return {
        type: DELETE_TASK_FROM_UNCOMPLETED
    }
}