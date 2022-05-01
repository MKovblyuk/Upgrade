import "../../css/skills/skill.css"
import { ProgressBar } from "./ProgressBar"
import {useHttp} from "../../hooks/http.hook"
import { useContext, useState } from "react"
import {AuthContext} from "../../context/AuthContext"
import { deleteSkill } from "../../redux/actions/skillsActions"
import {useDispatch} from "react-redux"
import { SkillTasksComponent } from "./SkillTasksComponent"
import { UpdateSkillForm } from "./UpdateSkillForm"

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
            <UpdateSkillForm skill={skill} hideForm={hideUpdateSkillForm} visible={updateSkillFormVisibility}/>
            Name: {skill.name} <br/>
            <ProgressBar value={skill.achievedPoints} currentLevel={skill.level}/>
            <button onClick={deleteHandler}>Delete</button>
            <button onClick={tasksVisibilityHandler}>Tasks</button>
            <button onClick={showUpdateSkillForm}>Edit</button>
            <SkillTasksComponent tasks={skill.tasks} owner={skill._id} visible={tasksVisibility}/>
        </div>
    )
}