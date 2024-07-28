import React, { useContext, useEffect, useState } from 'react'
import Navlinks from '../Navlinks/Navlinks';
import Stories from '../Stories/Stories';
import Profilesug from '../Profilesuggestions/Profilesug';
import Post from '../Posts/Post';
import './Home.css'
import UserContext from '../../Context/UserContext';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import CreatePost from '../CreatePost/CreatePost';


function Home() {

    const { caption, setCaption, createPost } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("userToken")) {
            navigate('/')
        }
    }, [])

    const Logout = async () => {
        await signOut(auth)
        localStorage.removeItem('userToken')
        console.log("log from signout", localStorage.getItem('userToken'));
        navigate('/')
    }


    console.log(document.querySelector('body'));
    if (createPost) {
        document.querySelector('body').classList.remove('scrollOn')
        document.querySelector('body').classList.add('scrollOff')
    }
    else {
        document.querySelector('body').classList.add('scrollOn')
        document.querySelector('body').classList.remove('scrollOff')
    }

    return (
        <div className={createPost ? "home" : "homme"}>
            <div className='home-contents'>
                <div className="createpost" style={createPost ? { display: 'block' } : { display: 'none' }}>
                    <CreatePost />
                </div>
                <Navlinks />
                <div className="realtime-content">
                    <Stories />
                    <Profilesug />
                    <button onClick={Logout}>logout</button>
                    <Post />
                </div>
            </div>
        </div>
    )
}

export default Home