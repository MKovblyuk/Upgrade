import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux"
import { AuthContext } from "../../context/AuthContext"
import {useHttp} from "../../hooks/http.hook"
import { updateTask } from "../../redux/actions/tasksActions";
import "../../css/skills/updateForm.css"

export const UpdateTaskForm = ({task, hideForm, visible}) => {
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const dispatch = useDispatch()
    const [newTask, setNewTask] = useState(task)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateTask(request, token, newTask))
    }

    const inputHandler = (e) => {
        setNewTask({...newTask, [e.target.name]: e.target.value})
    }

    return(
        visible ?
            <div className="TransparentBg">
                <form onSubmit={submitHandler} className="UpdateForm">
                    <b>UpdateTaskForm</b><br/>
                    <input
                        name="name"
                        value={newTask.name}
                        onChange={inputHandler}
                    />
                    <input
                        name="points"
                        value={newTask.points}
                        onChange={inputHandler}
                        type="number"
                    />
                    <div className="Buttons">
                        <button type="submit">Save</button>
                        <button onClick={hideForm}>Cancel</button>
                    </div>
                </form>
            </div>
        : null
    )
}