import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import {deleteTask} from "../../redux/actions/tasksActions"
import { addTodo } from "../../redux/actions/todoActions";
import { UpdateTaskForm } from "./UpdateTaskForm";

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
        <div style={{backgroundColor: "yellow", margin: "5px", padding: "4px"}}>
            <UpdateTaskForm task={task} hideForm={hideUpdateTaskForm} visible={updateTaskFormVisibility}/>
            Name:{task.name}<br/>
            Points:{task.points}<br/>
            <button onClick={deleteTaskHandler}>Delete</button>
            <button onClick={editTaskHandler}>Edit</button>
            <button onClick={addToToDoHandler}>Add To ToDo</button>
        </div>
    )
}