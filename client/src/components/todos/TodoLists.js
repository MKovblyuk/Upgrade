import React from "react";
import { CompletedTodoList } from "./CompletedTodoList";
import { UncompletedTodoList } from "./UncompletedTodoList";

export const TodoLists = ({todos}) => {
    const completedTodos = todos.filter(todo => todo.completed)
    const uncompletedTodos = todos.filter(todo => !todo.completed)
    return(
        <div>
            Todo list: <br/>
            <UncompletedTodoList todos={uncompletedTodos}/>
            <br/><br/>
            <CompletedTodoList todos={completedTodos}/>
        </div>
    )
}