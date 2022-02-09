import React, { useContext } from "react";
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom"
import "../css/header.css"
import { AuthContext } from "../context/AuthContext";

export const Header = () => {
    const authContext = useContext(AuthContext)

    return(
        <header>
            <NavLink to="auth">
                <Button 
                    variant="contained" 
                    color="success" 
                    sx={{ m: 1 }}
                >Log In</Button>
            </NavLink>
            <Button 
                variant="contained" 
                color="primary" 
                sx={{ m: 1 }} 
                onClick={authContext.logout}
            >Log Out</Button>
        </header>
    )
}