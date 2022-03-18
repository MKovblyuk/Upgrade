import {FETCH_SKILLS, ADD_SKILL, DELETE_SKILL} from "../actionsTypes"
import {showLoading, hideLoading} from "./appActions"

const fetchSkillsSuccess = (skills) => {
    return {
        type: FETCH_SKILLS,
        skills
    }
}

const addSkillSuccess = (skill) => {
    return {
        type: ADD_SKILL,
        skill
    }
}

const deleteSkillSuccess = (skillID) => {
    return {
        type: DELETE_SKILL,
        skillID
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

export const addSkill = (request, token, userId, skillName) => {
    return async dispatch => {
        try{
            const {skill} = await request("api/skills/add","POST", {skillName, userId}, {
                Authorization: `Bearer ${token}`
            })

            dispatch(addSkillSuccess(skill))
        }catch(e){
            console.log("Error in addSkill:",e.message)
        }
    }
}

export const deleteSkill = (request, token, skillID) => {
    return async dispatch => {
        try{
            await request("api/skills", "DELETE", {skillID}, {
                Authorization: `Beare ${token}`
            })
            
            dispatch(deleteSkillSuccess(skillID))
        }catch(e){
            console.log("Error in deleteSkill:", e.message)
        }
    }
}