import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from "../components/login/Login"
import SignUp from "../components/SignUp/SignUp"
import Home from '../components/Home/Home'
import Profile from '../components/Profile/Profile'
import MiniPost from '../minicomponets/MiniPost'
import MiniSaved from '../minicomponets/MiniSaved'
import MiniTagged from '../minicomponets/MiniTagged'
function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/home' element={<Home />} />
                <Route path='/profile' element={<Profile />}>
                    <Route path='/profile/' element={<MiniPost />} />
                    <Route path='/profile/save' element={<MiniSaved />} />
                    <Route path='/profile/tagged' element={<MiniTagged />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Router