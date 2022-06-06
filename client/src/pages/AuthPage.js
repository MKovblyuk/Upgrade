import React, { useContext, useState } from "react";
import {Button, Input, InputLabel} from "@mui/material"
import "../css/pages/authPage.css"
import { useHttp } from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext"
import {useNavigate} from "react-router-dom"

export const AuthPage = () => {
    const [form, setForm] = useState({
        email: "", password: ""
    })

    const {request} = useHttp()
    const authContext = useContext(AuthContext)
    const navigate = useNavigate()
    const [warningText, setWarningText] = useState('')

    const changeHandler = (e) => {
        setForm({...form,
            [e.target.id]: e.target.value
        })
    }

    const registerHandler = async (e) => {
        try{
            e.preventDefault()
            setWarningText("")
            await request('api/auth/register', 'POST', {...form})
            await login()
        }catch(e){
            setWarningText(e.message)
        }
    }

    const loginHandler = async (e) => {
        try{
            e.preventDefault()
            setWarningText("")
            await login()
        }catch(e){
            setWarningText(e.message)
        }
    }

    const login = async () => {
        const data = await request('api/auth/login', 'POST', {...form})
        authContext.login(data.token, data.userId)
        navigate("/")
    }

    return (
        <div className="AuthPage">
            <form>
                <h2>Авторизація</h2>
                <InputLabel htmlFor="email" className="inputLabel">Email</InputLabel>
                <Input 
                    placeholder="Введіть ваш email" 
                    required={true}
                    id="email"
                    onChange={changeHandler}
                />

                <InputLabel htmlFor="password" sx={{padding: 0}}>Пароль</InputLabel>
                <Input
                    placeholder="Введіть ваш пароль"
                    required={true}
                    id="password"
                    type="password"
                    onChange={changeHandler}
                />

                <div className="WarningText">
                    {warningText}
                </div>

                <div className="buttons">
                    <Button 
                        className="btnLogin"  
                        variant="contained" 
                        color="success"
                        onClick={loginHandler}
                    >
                        Увійти
                    </Button>

                    <Button 
                        className="btnRegister"  
                        variant="contained" 
                        color="primary"
                        onClick={registerHandler}
                        sx={{marginTop: "10px"}}
                    >
                        Зареєструватися
                    </Button>
                </div>
            </form>
        </div>
    )
}