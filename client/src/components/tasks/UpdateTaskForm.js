import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux"
import { AuthContext } from "../../context/AuthContext"
import {useHttp} from "../../hooks/http.hook"
import { updateTask } from "../../redux/actions/tasksActions";
import "../../css/updateForm.css"

export const UpdateTaskForm = ({task, hideForm, visible}) => {
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const dispatch = useDispatch()
    const [newTask, setNewTask] = useState(task)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateTask(request, token, newTask))
        hideForm()
    }

    const inputHandler = (e) => {
        setNewTask({...newTask, [e.target.name]: e.target.value})
    }

    return(
        visible ?
            <div className="TransparentBg">
                <form onSubmit={submitHandler} className="UpdateForm">
                    <b>Редагування Завдання</b><br/>
                    <input
                        name="name"
                        value={newTask.name}
                        onChange={inputHandler}
                        required
                    />
                    <input
                        name="points"
                        value={newTask.points}
                        onChange={inputHandler}
                        type="number"
                        required
                    />
                    <div className="Buttons">
                        <button type="submit">Зберегти</button>
                        <button onClick={hideForm}>Відмінити</button>
                    </div>
                </form>
            </div>
        : null
    )
}