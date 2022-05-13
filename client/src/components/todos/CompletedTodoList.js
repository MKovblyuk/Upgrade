import React from "react";
import {CompletedTodo} from "./CompletedTodo";

export const CompletedTodoList = ({todos}) => {
    const list = todos.map(todo => <CompletedTodo key={todo._id} todo={todo}/>)
    return(
        <div>
            Completed todos <br/>
            {list}
        </div>
    )
}