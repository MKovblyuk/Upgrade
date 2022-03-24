import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import {deleteTask} from "../../redux/actions/tasksActions"

export const Task = ({task}) => {
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const dispatch = useDispatch()

    const deleteTaskHandler = () => {
        dispatch(deleteTask(request, token, task))
    }

    return(
        <div style={{backgroundColor: "yellow", margin: "5px", padding: "4px"}}>
            Name:{task.name}<br/>
            Points:{task.points}<br/>
            <button onClick={deleteTaskHandler}>Delete</button>
        </div>
    )
}