import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import { deleteTodo, uncompleteTodo } from "../../redux/actions/todoActions";
import "../../css/todos/todo.css"
import deleteIcon from "../../images/buttons_icons/delete_white_icon.png"
import uncompleteIcon from "../../images/buttons_icons/back_white_icon.png"

export const CompletedTodo = ({todo}) => {
    console.log("todo:",todo)
    const dispatch = useDispatch()
    const {request} = useHttp()
    const {token} = useContext(AuthContext)

    const uncompleteHandler = () => {
        dispatch(uncompleteTodo(request, token, todo))
    }

    const deleteHandler = () => {
        dispatch(deleteTodo(request, token, todo._id))
    }

    return(
        <div className="CompletedTodo Todo">
            <div className="Info">
                Name: {String(todo.name)} <br/>
                Completed: {String(todo.completed)} <br/>
                Points: {String(todo.points)} <br/>
            </div>
            <div className="Buttons">
                <button onClick={uncompleteHandler} className="UncompleteBtn">
                    <img src={uncompleteIcon} alt="uncomplete_icon"/>
                </button>
                <button onClick={deleteHandler} className="DeleteBtn">
                    <img src={deleteIcon} alt="delete_icon"/>
                </button>
            </div>
        </div>
    )
}