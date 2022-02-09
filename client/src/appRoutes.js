import React from "react";
import {Route, Routes} from "react-router-dom"
import {HomePage} from "./pages/HomePage"
import {AuthPage} from "./pages/AuthPage"

export const useAppRoutes = () => {
    return (
        <Routes>
            <Route path="auth" element={<AuthPage/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<HomePage/>}/>
        </Routes>
    )
}