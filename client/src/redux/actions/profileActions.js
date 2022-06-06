import {FETCH_PROFILE, UPDATE_PROFILE} from "../actionsTypes"

const _updateProfile = (profile) => {
    return {
        type: UPDATE_PROFILE,
        profile
    }
}

const _fetchProfile = (profile) => {
    return {
        type: FETCH_PROFILE,
        profile
    }
}


export const updateProfile = (request, token, profile) => {
    return async dispatch => {
        try{
            const {response_profile} = await request("api/profile/update", "POST", {profile}, {
                Authorization: `Bearer ${token}`
            })

            console.log("profile in update profile", response_profile)

            dispatch(_updateProfile(response_profile))
        }catch(e){
            console.log("Error in updateProfile:",e.message)
        }
    }
}

export const fetchProfile = (request, token) => {
    return async dispatch => {
        try{
            const response = await request("api/profile", "GET", null, {
                Authorization: `Bearer ${token}`
            })
            const profile = response[0]

            console.log("in fethc profile")
            console.log("response[0]:",response[0])
            console.log("prse response[0]:", {...response[0]})

            dispatch(_fetchProfile(profile))
        }catch(e){
            console.log("Error in fetchProfile:",e.message)
        }
    }
}