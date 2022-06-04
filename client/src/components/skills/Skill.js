import React from "react"
import "../../css/skills/skill.css"
import { ProgressBar } from "./ProgressBar"
import {useHttp} from "../../hooks/http.hook"
import { useContext, useState } from "react"
import {AuthContext} from "../../context/AuthContext"
import { deleteSkill } from "../../redux/actions/skillsActions"
import {useDispatch} from "react-redux"
import { SkillTasksComponent } from "./SkillTasksComponent"
import { UpdateSkillForm } from "./UpdateSkillForm"
import deleteIcon from "../../images/buttons_icons/delete_white_icon.png"
import editIcon from "../../images/buttons_icons/edit_white_icon.png"

export const Skill = ({skill}) => {
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const dispatch = useDispatch()
    const [tasksVisibility, setTasksVisibility] = useState(false)
    const [updateSkillFormVisibility, setUpdateSkillFormVisibility] = useState(false)

    const deleteHandler = () => {
        dispatch(deleteSkill(request, token, skill._id))
    }

    const showUpdateSkillForm = () => {
        setUpdateSkillFormVisibility(true)
    }

    const hideUpdateSkillForm = () => {
        setUpdateSkillFormVisibility(false)
    }


    const tasksVisibilityHandler = () => {
        setTasksVisibility(!tasksVisibility)
        console.log("tasks:",skill.tasks)
    }

    console.log("skill in skill component:", skill)

    return (
        <div className="Skill">
            <div className="Data">
                <UpdateSkillForm skill={skill} hideForm={hideUpdateSkillForm} visible={updateSkillFormVisibility}/>
                <b>Name:</b> {skill.name} <br/>
                <ProgressBar value={skill.achievedPoints} currentLevel={skill.level}/>
                <div className="Buttons">
                    <button onClick={deleteHandler}>
                        <img src={deleteIcon} alt="delete_icon"/>
                    </button>
                    <button onClick={showUpdateSkillForm}>
                        <img src={editIcon} alt="edit_icon"/>
                    </button>
                    <button onClick={tasksVisibilityHandler} className="TasksBtn">
                        Tasks
                    </button>
                </div>
            </div>
            <SkillTasksComponent tasks={skill.tasks} owner={skill._id} visible={tasksVisibility}/>
        </div>
    )
}