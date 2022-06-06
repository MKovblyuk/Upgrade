import { FETCH_PROFILE, UPDATE_PROFILE } from "../actionsTypes"

const initialState = {
    profile: {},
    wasFetched: false
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PROFILE: {
            console.log("in fetch profile reducer")
            console.log("profile in reducer:",action.profile)
            return {...state, profile: action.profile, wasFetched: true}
        }
        case UPDATE_PROFILE:
            return {...state, profile: action.profile}
        default: 
            return state
    }
}