import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import { completeTodo, deleteTodo } from "../../redux/actions/todoActions";
import "../../css/todos/uncompletedTodo.css"

export const UncompletedTodo = ({todo}) => {
    console.log("todo:",todo)
    const dispatch = useDispatch()
    const {request} = useHttp()
    const {token} = useContext(AuthContext)

    const completeHandler = () => {
        dispatch(completeTodo(request, token, todo))
    }

    const deleteHandler = () => {
        dispatch(deleteTodo(request, token, todo._id))
    }

    return(
        <div className="UncompletedTodo">
            <div className="Info">
                <b>Name:</b> {String(todo.name)} <br/>
                <b>Completed:</b> {String(todo.completed)} <br/>
                <b>Points:</b> {String(todo.points)} <br/>
            </div>
            <div className="Buttons">
                <button onClick={completeHandler}>Complete</button>
                <button onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}