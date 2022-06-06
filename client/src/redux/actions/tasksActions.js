import {ADD_TASK, DELETE_TASK, UPDATE_TASK, FETCH_TASKS} from "../actionsTypes"
import { fetchTodos } from "./todoActions"


export const fetchTasksSuccess = (tasks) => {
    return {
        type: FETCH_TASKS,
        tasks
    }
}

export const fetchTasks = (request, token) => {
    return async dispatch => {
        try{
            const tasks = await request("api/tasks", "GET", null, {
                Authorization: `Bearer ${token}`
            })

            dispatch(fetchTasksSuccess(tasks))
        }catch(e){
            console.log("Error in fetchTasks",e.message)
        }
    }
}

const addTaskSuccess = (task) => {
    return {
        type: ADD_TASK,
        task
    }
}

export const addTask = (request, token, task) => {
    return async dispatch => {
        try{
            console.log("task in add task1:",task)
            const {response_task} = await request("api/tasks/add","POST", {task}, {
                Authorization: `Bearer ${token}`
            })
            console.log("task in add task2:",response_task)
            dispatch(addTaskSuccess(response_task))
        } catch(e){
            console.log("Error in addTask",e.message)
        }  
    }
}

const deleteTaskSuccess = (task) => {
    return {
        type: DELETE_TASK,
        task
    }
}

export const deleteTask = (request, token, task) => {
    return async dispatch => {
        try{
            await request("api/tasks","DELETE", {task}, {
                Authorization: `Bearer ${token}`
            })

            dispatch(deleteTaskSuccess(task))
        } catch(e){
            console.log("Error in deleteTask",e.message)
        }  
    }
}

const updateTaskSuccess = (task) => {
    return {
        type: UPDATE_TASK,
        task
    }
}

export const updateTask = (request, token, task) => {
    return async dispatch => {
        try{
            await request("api/tasks/update", "POST", {task}, {
                Authorization: `Bearer ${token}`
            })
            dispatch(updateTaskSuccess(task))
        }catch(e){
            console.log("Error in updateTask:",e.message)
        }
    }
}