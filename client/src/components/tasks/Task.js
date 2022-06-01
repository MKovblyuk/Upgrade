import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import {deleteTask} from "../../redux/actions/tasksActions"
import { addTodo } from "../../redux/actions/todoActions";
import { UpdateTaskForm } from "./UpdateTaskForm";
import "../../css/tasks/task.css"
import deleteIcon from "../../images/buttons_icons/delete_white_icon.png"
import editIcon from "../../images/buttons_icons/edit_white_icon.png"

export const Task = ({task}) => {
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const dispatch = useDispatch()

    const [updateTaskFormVisibility, setUpdateSkillFormVisibility] = useState(false)

    const deleteTaskHandler = () => {
        dispatch(deleteTask(request, token, task))
    }

    const editTaskHandler = () => {
        showUpdateTaskForm()
    }

    const addToToDoHandler = () => {
        const newTodo = {
            name: task.name,
            points: task.points,
            completed: false,
            skillId: task.owner
        }

        dispatch(addTodo(request, token, newTodo))
    }

    const showUpdateTaskForm = () => {
        setUpdateSkillFormVisibility(true)
    }

    const hideUpdateTaskForm = () => {
        setUpdateSkillFormVisibility(false)
    }

    return(
        <div className="Task">
            <UpdateTaskForm task={task} hideForm={hideUpdateTaskForm} visible={updateTaskFormVisibility}/>
            <div className="Content">
                <div className="Info">
                    <div><b>Name:</b> {task.name}</div>
                    <div><b>Points:</b> {task.points}</div>
                </div>
                <div className="Buttons">
                    <button onClick={deleteTaskHandler}><img src={deleteIcon} alt="delete_icon"/></button>
                    <button onClick={editTaskHandler}><img src={editIcon} alt="edit_icon"/></button>
                    <button className="AddToTodoBtn" onClick={addToToDoHandler}>Add To ToDo</button>
                </div>
            </div>
        </div>
    )
}