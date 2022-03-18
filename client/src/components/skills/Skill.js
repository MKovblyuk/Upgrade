import "../../css/skills/skill.css"
import { ProgressBar } from "./ProgressBar"
import {useHttp} from "../../hooks/http.hook"
import { useContext } from "react"
import {AuthContext} from "../../context/AuthContext"
import { deleteSkill } from "../../redux/actions/skillsActions"
import {useDispatch} from "react-redux"

export const Skill = ({skill}) => {
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const dispatch = useDispatch()

    const deleteHandler = () => {
        dispatch(deleteSkill(request, token, skill._id))
    }

    return (
        <div className="Skill">
            Name: {skill.name} <br/>
            <ProgressBar value={skill.achievedPoints} currentLevel={skill.level}/>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}