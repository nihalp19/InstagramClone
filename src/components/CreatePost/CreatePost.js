import React, { useContext, useState, useEffect } from 'react'
import './CreatePost.css'
import UserContext from '../../Context/UserContext'
import { FaArrowLeft } from "react-icons/fa6";
import { storage } from '../../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { nanoid } from 'nanoid';
import { auth } from '../../firebase';
import { addDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

function CreatePost() {
    const [imgPreview, setimgPreview] = useState();
    const [currentUserData, setcurrentUserData] = useState([])
    const [captionText, setcaptionText] = useState('')
    const [file, setFile] = useState({})
    const { caption, setCreatePost, setCaption } = useContext(UserContext)
    const id = nanoid()
    const docRef = collection(db, "users");
    const addDocRef = collection(db, "postCaption")

    const captionData = {
        text: captionText,
        id:id,
    }

    useEffect(() => {
        const fetchData1 = async () => {
            try {
                const users = await getDocs(docRef)
                const snapShot = users.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                const filterData = snapShot.filter((s) => { return s.Email == localStorage.getItem('email') })
                setcurrentUserData(filterData);
                console.log('data fetch for username sucessfully');
            }
            catch (err) {
                console.error(err);
            }

        }
        fetchData1();
    }, [])

    const handleClick = () => {
        document.querySelector('.input-img').click()
    }


    const handleImage = (e) => {
        setFile(e.target.files[0])
        setimgPreview(URL.createObjectURL(e.target.files[0]))
    }


    const handleCancel = () => {
        setCreatePost(false);
        setCaption(false)
        setimgPreview();
    }

    const uploadPost = async () => {
        const imgRef = ref(storage, `posts/${id}`)
        const metadata = {
            contentType: file.type,
        }
        try {
            await uploadBytes(imgRef, file, metadata)
            console.log('Upload successful');
        } catch (error) {
            console.error('Upload failed:', error.message);
        }
        try {
            await addDoc(addDocRef, captionData)
            console.log('caption added');
        }
        catch (err) {
            console.error(err);
        }
        setCreatePost(false)
        setcaptionText('')
        setFile();
    }



    return (
        <div className="creatpost">
            <div className='creatpost-div-1'>
                {imgPreview ? (<div className={caption ? 'creatpost-caption-section' : 'creatpost-div-2'}>
                    <div className='next-left-arrow'>
                        <FaArrowLeft onClick={() => setCaption(false)} />
                        <p className='next' style={caption ? { display: 'none' } : { display: 'block' }} onClick={() => setCaption(true)}>Next</p>
                        <p className='share' style={caption ? { display: 'block' } : { display: 'none' }} onClick={uploadPost}>Share</p>
                    </div>
                    <div className="image-textarea">
                        <img className='previewImage' src={imgPreview} alt="" />
                        <div className="caption-section" style={caption ? { display: 'block' } : { display: 'none' }}>
                            <div className="profile-info">
                                <img src={localStorage.getItem('profileimageUrl')} className="profile-img" />
                                <p className='username'>{currentUserData.map((c) => { return (c.userName) })}</p>
                            </div>
                            <textarea value={captionText} placeholder='Write a caption...' onChange={(e) => setcaptionText(e.target.value)}></textarea>
                        </div>
                    </div>
                </div>) : (
                    <div className='creatpost-div-2'>
                        <h4>Create new post</h4>
                        <img className="logo-img" src={require('./Screenshot_2024-07-06_102916-removebg-preview.png')} alt="" />
                        <h3>Drag photos and videos here</h3>
                        <button onClick={handleClick}>Select from computer<input type="file" className='input-img' accept='image/*,video/*' multiple={false} onChange={handleImage} style={{ display: 'none' }} /></button>
                    </div>)
                }
            </div>
            <p onClick={handleCancel}>X</p>
        </div>
    )
}

export default CreatePost