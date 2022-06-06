import React, { useContext,useState } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import {addSkill} from "../../redux/actions/skillsActions"
import "../../css/skills/addSkillForm.css"
import plusIcon from "../../images/buttons_icons/plus_icon_dark_grey.png"

export const AddSkillForm = () => {
    const dispatch = useDispatch()
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const [skillName, setSkillName] = useState("")
    
    const addSkillHandler = (e) => {
        e.preventDefault()
        dispatch(addSkill(request, token, skillName))
    }

    const inputHandler = (e) => {
        setSkillName(e.target.value)
    } 

    return(
        <form onSubmit={addSkillHandler} className="AddSkillForm">
            <div className="FormHeader">Додати Навик</div>
            <div className="ActiveElements">
                <input placeholder="Назва" required onChange={inputHandler} value={skillName}/>
                <button type="submit">
                    <img src={plusIcon} alt="plusIcon"/>
                </button>
            </div>
        </form>
    )
}