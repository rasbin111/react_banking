import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../components/AxiosAPI";

const MFAAuth = () => {
  const nav = useNavigate();
  const [mfaCode, setMFACode] = useState("");

  function handleSubmit(e: React.FocusEvent<HTMLFormElement>) {
    e.preventDefault();
    const token = localStorage.getItem("token")
    if (token){
      axiosInstance.defaults.headers["x-access-token"] = token 
      axiosInstance.put("/users/enable-mfa", {
        "code": mfaCode
      })
      .then(response=>{
        if (response.status === 200){
          nav("/")
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }
    
  }
  return (
    <div>
      <h1> Two Factor Authentication </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mfaCode"> Code </label>
        <input
          type="text"
          id="mfaCode"
          value={mfaCode}
          onChange={(e) => {
            setMFACode(e.target.value);
          }}
        />
        <button type="submit"> Submit Code </button>
      </form>
    </div>
  );
};

export default MFAAuth;
