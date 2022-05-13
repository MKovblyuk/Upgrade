import { 
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    UNCOMPLETE_TODO,
    FETCH_TODOS
} from "../actionsTypes"

const initialState = {
    todos: [],
    wasFetched: false
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TODOS:
            return {...state, todos: [...state.todos,...action.todos], wasFetched: true}
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.todo]}
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(e => e._id !== action.todoId)}
        case COMPLETE_TODO:{
            const index = state.todos.findIndex(e => e._id === action.todoId)
            let newTodos = [...state.todos]
            newTodos[index].completed = true
            return {...state, todos: newTodos}
        }
        case UNCOMPLETE_TODO:{
            const index = state.todos.findIndex(e => e._id === action.todoId)
            let newTodos = [...state.todos]
            newTodos[index].completed = false
            console.log("new todos:",newTodos)
            return {...state, todos: newTodos}
        }
        default:
            return state
    }
}