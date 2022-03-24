import React from "react";

export const AddTaskForm = ({owner}) => {
    return(
        <form>
            <input placeholder="Name"/>
            <input placeholder="Points" type="number"/>
            <button>Add</button>
        </form>
    )
}