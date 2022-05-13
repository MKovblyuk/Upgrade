import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    UNCOMPLETE_TODO,
    FETCH_TODOS
} from "../actionsTypes"

import {showLoading, hideLoading} from "./appActions"
import { decreaseSkillLevel, increaseSkillLevel } from "./skillsActions"

const _fetchTodos = (todos) => {
    return {
        type: FETCH_TODOS,
        todos
    }
}

const _addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo
    }
}

const _deleteTodo= (todoId) => {
    return {
        type: DELETE_TODO,
        todoId
    }
}

const _completeTodo = (todoId) => {
    return {
        type: COMPLETE_TODO,
        todoId
    }
}

const _uncompleteTodo = (todoId) => {
    return {
        type: UNCOMPLETE_TODO,
        todoId
    }
}



export const fetchTodos = (request, token) => {
    return async dispatch => {
        try{
            dispatch(showLoading())
            const todos = await request("api/todos", "GET", null, {
                Authorization: `Bearer ${token}`
            })

            dispatch(_fetchTodos(todos))
            dispatch(hideLoading())
        }catch(e){
            console.log("Error in fetch todos:", e.message)
        }
    }
}

export const addTodo = (request, token, todo) => {
    return async dispatch => {
        try{
            const response = await request("api/todos/add", "POST", {todo}, {
                Authorization: `Bearer ${token}`
            })
            todo._id = response.id

            dispatch(_addTodo(todo))
        }catch(e){
            console.log("Error in todo add task to completed:", e.message)
        }
    }
}

export const deleteTodo = (request, token, todoId) => {
    return async dispatch => {
        try{
            await request("api/todos", "DELETE", {todoId}, {
                Authorization: `Bearer ${token}`
            })

            dispatch(_deleteTodo(todoId))
        }catch(e){
            console.log("Error in todo delete task from completed:", e.message)
        }
    }
}

export const completeTodo = (request, token, todo) => {
    return async dispatch => {
        try{
            await request("api/todos/complete", "POST", {todoId: todo._id}, {
                Authorization: `Bearer ${token}`
            })

            dispatch(_completeTodo(todo._id))
            dispatch(increaseSkillLevel(request, token, todo.points, todo.skillId))
        }catch(e){
            console.log("Error in todo add task to uncompleted:", e.message)
        }
    }
}

export const uncompleteTodo = (request, token, todo) => {
    return async dispatch => {
        try{
            await request("api/todos/uncomplete", "POST", {todoId: todo._id}, {
                Authorization: `Bearer ${token}`
            })

            dispatch(_uncompleteTodo(todo._id))
            dispatch(decreaseSkillLevel(request, token, todo.points, todo.skillId))
        }catch(e){
            console.log("Error in todo delete task from uncompleted:", e.message)
        }
    }
}