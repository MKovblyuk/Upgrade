import React, { useContext,useState } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import {addSkill} from "../../redux/actions/skillsActions"

export const AddSkillForm = () => {
    const dispatch = useDispatch()
    const {request} = useHttp()
    const {token, userId} = useContext(AuthContext)
    const [skillName, setSkillName] = useState("")
    
    const addSkillHandler = (e) => {
        e.preventDefault()
        dispatch(addSkill(request, token, userId, skillName))
    }

    const inputHandler = (e) => {
        setSkillName(e.target.value)
    } 

    return(
        <form onSubmit={addSkillHandler}>
            <input placeholder="Name" required onChange={inputHandler} value={skillName}/>
            <button type="submit">
                Add Skill
            </button>
        </form>
    )
}