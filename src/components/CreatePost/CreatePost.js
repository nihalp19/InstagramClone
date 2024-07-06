import React, { useState } from 'react'
import './CreatePost.css'
import './Screenshot_2024-07-06_102916-removebg-preview.png'
import { FaArrowLeftLong } from "react-icons/fa6";
function CreatePost() {

    const [file, setFile] = useState()
    const [img, setImg] = useState(false)
    const [comments, setComments] = useState(false)

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]))
        setImg(true);
    }

    const expandSection = () => {
        setComments(true)
    }

    return (
        <div className='CreatePost'>
            {img ?
                <div className={setComments ? 'image-comments' : 'image-comments-active'}>
                    <div className='img-active'>
                        <div className='backward-next'>
                            <FaArrowLeftLong style={{ color: 'white' }} />
                            <p style={{ color: '#1877F2' }} onClick={expandSection}>Next</p>
                        </div>
                        <img src={file} style={{ width: '100%', height: '100%', backgroundColor: 'black' }} />
                    </div>
                    <div className="commnets">
                         <div className='profile'>
                            <div className="profile-img"></div>
                            <div className="name"></div>
                         </div>
                         <div className="comments-sections">
                            <textarea name="" id=""></textarea>
                         </div>
                    </div>
                </div>
                :
                <div className="create-post-div">
                    <h2 >Create new post</h2>
                    <img className='logo-img' src={require('./Screenshot_2024-07-06_102916-removebg-preview.png')} alt="" />
                    <h3>Drag Photos and videos Here</h3>
                    <div className='file-btn'>
                        <input type="file" onChange={handleChange} />
                        <button>Select from computer</button>
                    </div>

                </div>
            }
        </div>
    )
}

export default CreatePost