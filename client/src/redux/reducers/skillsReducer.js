import { ADD_SKILL, DELETE_SKILL, FETCH_SKILLS } from "../actionsTypes"
import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from "../actionsTypes"

const initialState = {
    skills: []
}

export const skillsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SKILLS:
            return {...state, skills: action.skills}
        case ADD_SKILL:
            return {...state, skills: [...state.skills, action.skill]}
        case DELETE_SKILL:
            return {...state, skills: state.skills.filter(e => e._id !== action.skillID)}
        case ADD_TASK: 
            return {...state, skills: {...state.skills, tasks: [...state.skills.tasks, action.task]}}
        case DELETE_TASK: 
            let skills = [...state.skills]            
            const index = state.skills.findIndex(s => s._id === action.task.owner)
            skills[index] = {...skills[index], tasks: skills[index].tasks.filter(e => e._id !== action.task._id)}
            return {...state, skills}
        case UPDATE_TASK: 
            return state
        default: 
            return state
    }
}