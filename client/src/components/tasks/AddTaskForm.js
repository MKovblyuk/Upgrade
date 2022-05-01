import React, { useContext, useState } from "react";
import {useDispatch} from "react-redux"
import {addTask} from "../../redux/actions/tasksActions"
import {useHttp} from "../../hooks/http.hook"
import {AuthContext} from "../../context/AuthContext"

export const AddTaskForm = ({owner}) => {
    const [task, setTask] = useState({
        owner: owner,
        name: "",
        points: 0
    })

    const dispatch = useDispatch()
    const {request} = useHttp()
    const {token} = useContext(AuthContext)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addTask(request, token, task))
    }

    const inputHandler = (e) => {
        setTask({...task, [e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={submitHandler}>
            <input 
                placeholder="Name" 
                value={task.name} 
                name="name" 
                onChange={inputHandler} 
                required
            />
            <input 
                placeholder="Points" 
                type="number" 
                value={task.points} 
                name="points" 
                onChange={inputHandler}
            />
            <button>Add</button>
        </form>
    )
}