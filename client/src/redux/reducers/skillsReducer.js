import { ADD_SKILL, FETCH_SKILLS } from "../actionsTypes"

const initialState = {
    skills: []
}

export const skillsReducer = (state = initialState, action) => {
    console.log("in skills Reudcer")
    switch(action.type){
        case FETCH_SKILLS:
            return {...state, skills: action.skills}
        case ADD_SKILL:
            return {...state, skills: [...state.skills, action.skill]}
        default: 
            return state
    }
}