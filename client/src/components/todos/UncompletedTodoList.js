import React from "react";
import {UncompletedTodo} from "./UncompletedTodo"

export const UncompletedTodoList = ({todos}) => {
    let list = null;

    if(todos){
        list = todos.map(todo => <UncompletedTodo key={todo._id} todo={todo}/>)
    }

    return(
        <div>
            <b>Uncompleted todos:</b><br/>
            {list}
        </div>
    )
}