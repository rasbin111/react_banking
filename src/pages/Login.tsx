import React, { useState } from 'react'
import { axiosInstance } from '../components/AxiosAPI';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function submitForm(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    let postBody = {
      "email": email,
      "password": password
    }

    axiosInstance.post("/login", postBody)
    .then((response)=>{
      console.log(response)
    })
  }
  return (
    <div>
        <h1> Login </h1>
        <form onSubmit={submitForm}>
          <label htmlFor='email'> Email </label>
          <input type="text" id="email" onChange={e=>{
            setEmail(e.target.value)
          }}/>
          <label htmlFor='password'> Password</label>
          <input type="password" id="password" onChange={e=>{
            setPassword(e.target.value)
          }}/>
          <input type="submit" value="Login"/>
        </form>
    </div>
  )
}

export default Login
