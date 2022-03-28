import { FETCH_PROFILE, UPDATE_PROFILE } from "../actionsTypes"

const initialState = {
    profile: {}
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PROFILE: 
            return state
        case UPDATE_PROFILE:
            return state
        default: 
            return state
    }
}