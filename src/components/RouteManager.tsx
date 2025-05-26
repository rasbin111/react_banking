import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import MFAAuth from '../pages/MFAAuth'
import NoMatch from '../pages/NoMatch'

const RouteManager = () => {
    return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/login/mfa_auth" element={<MFAAuth/>} />
    <Route path="*" element={<NoMatch />} />
    </Routes>
    )
}

export default RouteManager  
