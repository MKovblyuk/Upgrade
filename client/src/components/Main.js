import React from "react"
import { Content } from "./Content"
import { Sidebar } from "./Sidebar"

export const Main = () => {
    return(
        <div className="Main" style={{display: "flex", minHeight: "600px"}}>
            <Sidebar/>
            <Content/>
        </div>
    )
}