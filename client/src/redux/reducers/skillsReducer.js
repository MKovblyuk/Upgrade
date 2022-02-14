import { FETCH_SKILLS } from "../actionsTypes"

const initialState = {
    skills: []
}

export const skillsReducer = (state = initialState, action) => {
    console.log("in skills Reudcer")
    switch(action.type){
        case FETCH_SKILLS:
            return {...state, skills: action.skills}
        default: 
            return state
    }
}