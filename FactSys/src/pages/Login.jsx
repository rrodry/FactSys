import React, { useEffect, useState } from "react"
import './Login.css'
import { loginBD } from '../functions/middle'
import Cookies from 'js-cookie'
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
    const [name, useName] = useState("")
    const [password, usePassword] = useState("")
    const [errorLogin, useErrorLogin] = useState("")
    const token = Cookies.get("token")
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        loginBD(name, password).then((res) => {
            if (res === undefined) {
                useErrorLogin("Usuario o contraseña incorrectos")
                return
            }
            Cookies.set("token", res)
            navigate("/menu")
        })
    }

    return <React.Fragment>
        {token && <Navigate to={"/menu"} />}
        <div className="containerLogin">
            <div className="login">
                <p>Ingresar</p>
                {errorLogin && errorLogin}

                <div className="divInput">
                    <input type="text" placeholder="Usuario" onChange={(e) => { useName(e.target.value) }} />
                    <input type="text" placeholder="Contraseña" onChange={(e) => { usePassword(e.target.value) }} />
                </div>
                <div className="divButtons">
                    <button onClick={(e) => { handleLogin(e) }}>Ingresar</button>
                    <button>Registarse</button>
                </div>
            </div>

        </div>

    </React.Fragment>
}