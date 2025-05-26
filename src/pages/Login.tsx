import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../components/AxiosAPI';
import { AxiosResponse } from 'axios';

import "../styles/Login.scss";


const Login = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginError, setLoginError] = useState("")

    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let postBody = {
            "email": email,
            "password": password
        };

        axiosInstance.post("users/login", postBody)
            .then((response: AxiosResponse) => {
                if (response.status === 200) {
                    console.log(response)
                    localStorage.setItem("token", response.data.token)
                    nav("/login/mfa_auth")
                }

            })
            .catch((err) => {
                if (err.response && err.response.status === 400) {
                    setPassword("")
                    setEmail("")
                    setLoginError("Invalid Email or password")
                } else {
                    setLoginError("An unexpected error occured")
                    console.log(`Error: ${err}`)
                }
            })
    }

    return (
        <div className="loginContainer">
            <h1> Login </h1>
            <form onSubmit={submitForm} className="loginForm">
                <div className="input">
                    <label htmlFor='email'> Email </label>
                    <input type="text" id="email" onChange={e => {
                        setEmail(e.target.value)
                    }} value={email} />
                </div>
                <div className='input'>
                    <label htmlFor='password'> Password</label>
                    <input type="password" id="password" onChange={e => {
                        setPassword(e.target.value)
                    }} value={password} />
                </div>
                <input type="submit" value="Login" className="input submit" />
                {loginError && <p className="loginError">{loginError}</p>}
            </form>
        </div>
    )
}

export default Login
