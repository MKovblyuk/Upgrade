import {
    FETCH_SKILLS, 
    ADD_SKILL, 
    DELETE_SKILL, 
    UPDATE_SKILL, 
    SHOW_UPDATE_SKILL_FORM, 
    HIDE_UPDATE_SKILL_FORM,
    INCREASE_SKILL_LEVEL,
    DECREASE_SKILL_LEVEL
} from "../actionsTypes"
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

const updateSkillSuccess = (skill) => {
    return {
        type: UPDATE_SKILL,
        skill
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

export const addSkill = (request, token, skillName) => {
    return async dispatch => {
        try{
            const {skill} = await request("api/skills/add","POST", {skillName}, {
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
                Authorization: `Bearer ${token}`
            })
            
            dispatch(deleteSkillSuccess(skillID))
        }catch(e){
            console.log("Error in deleteSkill:", e.message)
        }
    }
}

export const updateSkill = (request, token, skill) => {
    return async dispatch => {
        try{
            console.log('skill in action:',skill)
            await request("api/skills/update", "POST", {skill},{
                Authorization: `Bearer ${token}`
            })
            dispatch(updateSkillSuccess(skill))
        }catch(e){
            console.log("Error in updateSkill:",e.message)
        }
    }
}

export const showUpdateSkillForm = () => {
    return {
        type: SHOW_UPDATE_SKILL_FORM
    }
}

export const hideUpdateSkillForm = () => {
    return {
        type: HIDE_UPDATE_SKILL_FORM
    }
}



const _increaseSkillLevel = (points, skillId) => {
    return { 
        type: INCREASE_SKILL_LEVEL,
        points,
        skillId
    }
}

const _decreaseSkillLevel = (points, skillId) => {
    return {
        type: DECREASE_SKILL_LEVEL,
        points,
        skillId
    }
}

export const increaseSkillLevel = (request, token, points, skillId) => {
    return async dispatch => {
        try{
            await request("api/skills/increaseLevel", "POST", {points, skillId},{
                Authorization: `Bearer ${token}`
            })

            dispatch(_increaseSkillLevel(points, skillId))
        }catch(e){
            console.log("Error in increase level skill:",e.message)
        }
    }
}

export const decreaseSkillLevel = (request, token, points, skillId) => {
    return async dispatch => {
        try{
            await request("api/skills/decreaseLevel", "POST", {points, skillId},{
                Authorization: `Bearer ${token}`
            })

            dispatch(_decreaseSkillLevel(points, skillId))
        }catch(e){
            console.log("Error in decrease level skill:",e.message)
        }
    }
}