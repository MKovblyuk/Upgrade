import { ADD_SKILL, DELETE_SKILL, FETCH_SKILLS, HIDE_UPDATE_SKILL_FORM, SHOW_UPDATE_SKILL_FORM, UPDATE_SKILL } from "../actionsTypes"
import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from "../actionsTypes"
import {INCREASE_SKILL_LEVEL, DECREASE_SKILL_LEVEL} from "../actionsTypes"

const initialState = {
    skills: [],
    updateSkillFormVisibility: false,
    wasFetched: false
}

export const skillsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SKILLS:
            return {...state, skills: [...state.skills,...action.skills], wasFetched: true}
        case ADD_SKILL:
            return {...state, skills: [...state.skills, action.skill]}
        case DELETE_SKILL:
            return {...state, skills: state.skills.filter(e => e._id !== action.skillID)}
        case UPDATE_SKILL: {
            let skills = [...state.skills]
            const index = state.skills.findIndex(s => s._id === action.skill._id)

            skills[index] = action.skill
            return {...state, skills}
        }
        case ADD_TASK: {
            let skills = [...state.skills]
            const index = skills.findIndex(s => s._id === action.task.owner)

            skills[index].tasks = [...skills[index].tasks, action.task]
            return {...state, skills}
        }
        case DELETE_TASK: {
            let skills = [...state.skills]            
            const index = state.skills.findIndex(s => s._id === action.task.owner)

            skills[index] = {...skills[index], tasks: skills[index].tasks.filter(e => e._id !== action.task._id)}
            return {...state, skills}
        }
        case UPDATE_TASK: {
            let skills = [...state.skills]
            const skill_index = state.skills.findIndex(s => s._id === action.task.owner)

            let tasks = [...state.skills[skill_index].tasks]
            const task_index = tasks.findIndex(t => t._id === action.task._id)

            tasks[task_index] = action.task
            skills[skill_index].tasks = tasks
            return {...state, skills}
        }
        case SHOW_UPDATE_SKILL_FORM:
            return {...state, updateSkillFormVisibility: true}
        case HIDE_UPDATE_SKILL_FORM:
            return {...state, updateSkillFormVisibility: false}
        case INCREASE_SKILL_LEVEL:{
            let skills = [...state.skills]
            let index = skills.findIndex(s => s._id === action.skillId)

            let newAchievedPoints = skills[index].achievedPoints + Number(action.points)
            let newLevel = skills[index].level

            if(newAchievedPoints > 100){
                newLevel++
                newAchievedPoints -= 100
            }

            skills[index].achievedPoints = newAchievedPoints
            skills[index].level = newLevel

            return {...state, skills}
        }
        case DECREASE_SKILL_LEVEL:{
            let skills = [...state.skills]
            let index = skills.findIndex(s => s._id === action.skillId)

            let newAchievedPoints = skills[index].achievedPoints - Number(action.points)
            let newLevel = skills[index].level

            if(newAchievedPoints < 0){
                newLevel--
                newAchievedPoints += 100
            }

            skills[index].achievedPoints = newAchievedPoints
            skills[index].level = newLevel >= 0 ? newLevel : 0

            return {...state, skills}
        }
        default: 
            return state
    }
}