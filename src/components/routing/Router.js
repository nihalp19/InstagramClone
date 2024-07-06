import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from "../login/Login"
import SignUp from "../SignUp/SignUp"
import Home from '../Home/Home'
function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </div>
    )
}

export default Router