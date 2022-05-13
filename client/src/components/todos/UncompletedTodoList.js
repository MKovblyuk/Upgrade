import React from "react";
import {UncompletedTodo} from "./UncompletedTodo"

export const UncompletedTodoList = ({todos}) => {
    const list = todos.map(todo => <UncompletedTodo key={todo._id} todo={todo}/>)
    return(
        <div>
            Uncompleted todos <br/>
            {list}
        </div>
    )
}