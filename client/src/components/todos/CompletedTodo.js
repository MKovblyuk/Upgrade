import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import { deleteTodo, uncompleteTodo } from "../../redux/actions/todoActions";

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
        <div style={{backgroundColor: "green", marginBottom: "5px"}}>
            Name: {String(todo.name)} <br/>
            Completed: {String(todo.completed)} <br/>
            Points: {String(todo.points)} <br/>
            <button onClick={uncompleteHandler}>Unomplete</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}