import React from "react";
import {CompletedTodo} from "./CompletedTodo";

export const CompletedTodoList = ({todos}) => {
    let list = null;

    if(todos){
        list = todos.map(todo => <CompletedTodo key={todo._id} todo={todo}/>)
    }

    return(
        <div>
            <b>Completed todos:</b><br/>
            {list}
        </div>
    )
}