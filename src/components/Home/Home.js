import React, { useContext, useEffect, useState } from 'react'
import Navlinks from '../Navlinks/Navlinks';
import Stories from '../Stories/Stories';
import Profilesug from '../Profilesuggestions/Profilesug';
import Post from '../Posts/Post';
import './Home.css'
import CreatePost from '../CreatePost/CreatePost';
import UserContext from '../../Context/UserContext';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Home() {
    
    const { caption, setCaption } = useContext(UserContext)
    const [creatPost, setCreatePost] = useState(false);
    const [file, setFile] = useState()
    const [img, setImg] = useState(false);
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


    const handlePost = () => {
        setCreatePost(!creatPost)
        setImg(false);
        setFile();
    }
    console.log(document.querySelector('body'));
    if (creatPost) {
        document.querySelector('body').classList.remove('scrollOn')
        document.querySelector('body').classList.add('scrollOff')
    } 
    else {
        document.querySelector('body').classList.add('scrollOn')
        document.querySelector('body').classList.remove('scrollOff')
    }

    return (
        <div className={creatPost ? "home" : "homme"}>
            <div className='home-contents'>
                <div className="createPost" style={creatPost ? {} : { display: 'none' }}>
                    <div className={caption ? "box-comments-sections" : "box"}>
                        <CreatePost creatPost={creatPost} img={img} setImg={setImg} setFile={setFile} file={file} />
                    </div>
                    <p className='cancel' onClick={handlePost}>X</p>
                </div>
                <Navlinks creatPost={creatPost} setCreatePost={setCreatePost} />
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