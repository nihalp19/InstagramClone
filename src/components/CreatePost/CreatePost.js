import React, { useContext } from 'react'
import './CreatePost.css'
import { HiOutlineArrowLeft } from "react-icons/hi";
import UserContext from '../../Context/UserContext';
function CreatePost(props) {

    const { caption, setCaption } = useContext(UserContext)

    const handleChange = (e) => {
        console.log(e.target.files[0]);
        props.setFile(URL.createObjectURL(e.target.files[0]))
        props.setImg(true)
    }

    const backPost = () => {
        props.setFile()
        props.setImg(false)
    }

    return (
        <div>
            {props.img ? <div className={caption ? 'createpost-caption' : 'createpost-div-2'}>
                <div className="heading-2">
                    <HiOutlineArrowLeft style={{ color: 'white' }} onClick={backPost} />
                    <p style={{ color: 'white' }} onClick={() => setCaption(true)}>{caption ? 'Share' : 'Next'}</p>
                </div>
                <div className={caption ? 'caption-on' : ''}>
                    <img src={props.file} alt="" className='img-preview' />
                    <textarea style={{outline:'none',width:'200px', height:'100px', resize:'none'} }></textarea>
                </div>
            </div> :
                <div className='createpost-div-1'>
                    <p className='heading-1'>Create New Post</p>
                    <img className='img-logo' src={require('./Screenshot_2024-07-06_102916-removebg-preview.png')} alt="" />
                    <h3>Drag photos and videos here</h3>
                    <button>select from button</button>
                    <input className='file-select' type="file" accept='image/*,video/*' onChange={handleChange} />
                    <img src={props.file} alt="" />
                </div>}
        </div>


    )
}

export default CreatePost