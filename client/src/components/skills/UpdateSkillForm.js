import React, { useContext, useState } from "react"
import { useDispatch } from "react-redux"
import { AuthContext } from "../../context/AuthContext"
import {useHttp} from "../../hooks/http.hook"
import { updateSkill } from "../../redux/actions/skillsActions"
import "../../css/updateForm.css"

export const UpdateSkillForm = ({skill,hideForm, visible}) => {
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const dispatch = useDispatch()
    const [newSkill, setNewSkill] = useState(skill)

    const saveHandler = () => {
        dispatch(updateSkill(request, token, newSkill))
        hideForm()
    }

    const inputHandler = (e) => {
        setNewSkill({...newSkill, [e.target.name]: e.target.value})
    }

    return visible ? 
        <div className="TransparentBg">
            <form onSubmit={saveHandler} className="UpdateForm">
                <b>Редагування Навика</b><br/>
                <input name="name" onChange={inputHandler} value={newSkill.name} required/>
                <div className="Buttons">
                    <button type="submit">Зберегти</button>
                    <button onClick={hideForm}>Відмінити</button>
                </div>
            </form>
        </div>
    : null

}