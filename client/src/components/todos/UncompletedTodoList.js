import React from "react";
import {UncompletedTodo} from "./UncompletedTodo"

export const UncompletedTodoList = ({todos}) => {
    const list = todos.map(todo => <UncompletedTodo key={todo._id} todo={todo}/>)
    return(
        <div>
            <b>Uncompleted todos:</b><br/>
            {list}
        </div>
    )
}