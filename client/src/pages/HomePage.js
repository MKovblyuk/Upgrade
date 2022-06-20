import React from "react";
import {Header} from "../components/Header"
import {Footer} from "../components/Footer"
import {Main} from "../components/Main"
import "../css/pages/homePage.css"

export const HomePage = () => {
    return (
        <div className="HomePage">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}