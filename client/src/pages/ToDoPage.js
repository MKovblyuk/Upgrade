import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import {CircularProgress} from "@mui/material";
import { TodoLists } from "../components/todos/TodoLists";
import { fetchTodos } from "../redux/actions/todoActions";

export const ToDoPage = () => {
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todoReducer.todos)
    const loading = useSelector(state => state.appReducer.loading)
    const wasFetched = useSelector(state => state.todoReducer.wasFetched)

    useEffect(() => {
        if(!wasFetched){
            console.log("dispathc todos in ToDoPage")
            dispatch(fetchTodos(request, token))
        }
    },[])

    return (
        <div>
            {
                loading
                ?
                    <CircularProgress size={80} sx={{display: "block", margin: "0 auto", marginTop: "50px"}}/>
                :
                    <TodoLists todos={todos}/>
            }
        </div>
    )
}