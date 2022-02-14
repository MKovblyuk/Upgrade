import {FETCH_SKILLS} from "../actionsTypes"
import {showLoading, hideLoading} from "./appActions"

const fetchSkillsSuccess = (skills) => {
    return {
        type: FETCH_SKILLS,
        skills
    }
}

export const fetchSkills = (request, token) => {
    return async dispatch => {
        try{
            dispatch(showLoading())
            const skills = await request("api/skills", "GET", null, {
                Authorization: `Bearer ${token}`
            })

            dispatch(fetchSkillsSuccess(skills))
            dispatch(hideLoading())
        } catch(e){
            console.log("Error in fetchSkills:",e.message)
        }
    }
}