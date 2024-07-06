import React, { useState } from 'react'

import Navlinks from '../Navlinks/Navlinks';
import Stories from '../Stories/Stories';
import Profilesug from '../Profilesuggestions/Profilesug';
import Post from '../Posts/Post';
import './Home.css'
import CreatePost from '../CreatePost/CreatePost';

function Home() {

    const [creatPost,setCreatePost] = useState(false);

    return (
        <div className='home'>
            <div className='home-contents'>
                <div className="createPost" style={creatPost ? {} : {display:'none'}}>
                    <div className="box">
                        <CreatePost />
                    </div>
                    <p className='cancel' onClick={() => setCreatePost(!creatPost)}>X</p>
                </div>
                <Navlinks creatPost={creatPost} setCreatePost={setCreatePost} />
                <div className="realtime-content">
                    <Stories />
                    <Profilesug />
                    <Post />
                </div>
            </div>
        </div>
    )
}

export default Home