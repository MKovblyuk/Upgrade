import {FETCH_PROFILE, UPDATE_PROFILE} from "../actionsTypes"

export const updateProfile = () => {
    return {
        type: UPDATE_PROFILE
    }
}

export const fetchProfile = () => {
    return {
        type: FETCH_PROFILE
    }
}