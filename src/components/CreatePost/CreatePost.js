import React, { useEffect, useState, useContext } from 'react'
import './CreatePost.css'
import './Screenshot_2024-07-06_102916-removebg-preview.png'
import { FaArrowLeftLong } from "react-icons/fa6";
import UserContext from '../../Context/UserContext';

function CreatePost(props) {
    const { caption, setCaption } = useContext(UserContext)

    const handleChange = (e) => {
        console.log(e.target.files);
        props.setFile(URL.createObjectURL(e.target.files[0]))
        props.setImg(true);
    }

    return (
        <div className='CreatePost'>
            {props.img ?
                <div className='wrapper'>
                    <div className='backward-next'>
                        <FaArrowLeftLong style={{ color: 'white' }} onClick={() => setCaption(false)}/>
                        <p style={{ color: '#1877F2' }} onClick={() => setCaption(true)}>{caption ? "Share": "Next"}</p>
                    </div>
                    <div className={caption ? 'box-comments-sections' : 'image-comments'}>
                        <div className='img-active'>
                            <img className='img-upload' src={props.file} />
                        </div>
                        <div className="commets">
                            <div className='profile'>
                                <div className="profile-img"></div>
                                <div className="name">nihal</div>
                            </div>
                            <div className="comments-sections">
                                <textarea name="" id="" placeholder='write a caption'></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="create-post-div">
                    <h2 >Create new post</h2>
                    <img className='logo-img' src={require('./Screenshot_2024-07-06_102916-removebg-preview.png')} alt="" />
                    <h3>Drag Photos and videos Here</h3>
                    <div className='file-btn'>
                        <input type="file" onChange={handleChange} accept='image/*,videos/*' />
                        <button>Select from computer</button>
                    </div>

                </div>
            }
        </div>
    )
}

export default CreatePost