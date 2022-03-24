import "../../css/skills/skill.css"
import { ProgressBar } from "./ProgressBar"
import {useHttp} from "../../hooks/http.hook"
import { useContext, useState } from "react"
import {AuthContext} from "../../context/AuthContext"
import { deleteSkill } from "../../redux/actions/skillsActions"
import {useDispatch} from "react-redux"
import { TasksList } from "../tasks/TasksList"
import { SkillTasksComponent } from "./SkillTasksComponent"

export const Skill = ({skill}) => {
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const dispatch = useDispatch()
    const [tasksVisibility, setTasksVisibility] = useState(false)

    const deleteHandler = () => {
        dispatch(deleteSkill(request, token, skill._id))
    }

    // const addTaskHandler = () => {
    //     dispatch(addTask(request, token, skill._id))
    // }

    const tasksVisibilityHandler = () => {
        setTasksVisibility(!tasksVisibility)
        console.log("tasks:",skill.tasks)
    }

    console.log("skill in skill component:", skill)

    return (
        <div className="Skill">
            Name: {skill.name} <br/>
            <ProgressBar value={skill.achievedPoints} currentLevel={skill.level}/>
            <button onClick={deleteHandler}>Delete</button>
            <button onClick={tasksVisibilityHandler}>Tasks</button>
            <SkillTasksComponent tasks={skill.tasks} owner={skill._id} visible={tasksVisibility}/>
        </div>
    )
}