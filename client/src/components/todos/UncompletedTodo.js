import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import { completeTodo, deleteTodo } from "../../redux/actions/todoActions";
import "../../css/todos/todo.css"
import completeIcon from "../../images/buttons_icons/complete_white_icon.png"
import deleteIcon from "../../images/buttons_icons/delete_white_icon.png"

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
        <div className="Todo UncompletedTodo">
            <div className="Info">
                <b>Name:</b> {String(todo.name)} <br/>
                <b>Completed:</b> {String(todo.completed)} <br/>
                <b>Points:</b> {String(todo.points)} <br/>
            </div>
            <div className="Buttons">
                <button onClick={completeHandler} className="CompleteBtn">
                    <img src={completeIcon} alt="complete_icon"/>
                </button>
                <button onClick={deleteHandler} className="DeleteBtn">
                    <img src={deleteIcon} alt="delete_icon"/>
                </button>
            </div>
        </div>
    )
}