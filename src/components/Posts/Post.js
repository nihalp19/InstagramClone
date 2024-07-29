import React from 'react'
import { BsChat } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { LiaBookmarkSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { useEffect, useState } from 'react';
import { storage } from '../../firebase';
import { ref, getMetadata, listAll, getDownloadURL } from 'firebase/storage';
import './Post.css'
function Post() {

    const docRef = collection(db, "users");
    const [currentUserData, setcurrentUserData] = useState([])
    const [imageNameUrl, setimageNameUrl] = useState([])
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
        const fetchImageData = async () => {
            const imgRef = ref(storage, 'posts/');
            try {
                const res = listAll(imgRef)
                console.log(res,'success listed');
                
                const imgData = await Promise.all(res.items.map(async (itemRef) => {
                    const url = await getDownloadURL(itemRef);
                    const metadata = await getMetadata(itemRef);

                    console.log('Item Metadata:', metadata); // Debugging log

                    return {
                        url,
                        name: metadata.name,
                        type: metadata.contentType
                    };
                }));
                setimageNameUrl(imgData)
            }
            catch (err) {
                console.error(err);
            }

        }
        fetchImageData();
        console.log(imageNameUrl);
    }, [])

    return (
        <div>
            <div className="posts-contents">
                <div className="posts-reels">
                    <div className="username-profile">
                        <div className='username-followbtn-img'>
                            <img src={localStorage.getItem('profileimageUrl')} className="dp" />
                            <div className="user">
                                {currentUserData.map((c) => { return (c.userName) })}
                            </div>
                            <div className="follow-btn">
                                follow
                            </div>
                        </div>
                        <div className="options">
                            ...
                        </div>
                    </div>
                    <div className="post-img">

                    </div>
                    <div className="comments-links">
                        <div className="three-icons">
                            <CiHeart className='heart' />
                            <BsChat className='chat' />
                            <FiSend className='send' />
                        </div>
                        <div className="one-icons">
                            <LiaBookmarkSolid className='save' />
                        </div>
                    </div>
                    <div className="likes">
                        2789202 likes
                    </div>
                    <div className="comment-section">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni.
                    </div>
                </div>
                <div className="posts-reels">
                    <div className="username-profile">
                        <div className='username-followbtn-img'>
                            <div className="dp"></div>
                            <div className="user">
                                nihal
                            </div>
                            <div className="follow-btn">
                                follow
                            </div>
                        </div>
                        <div className="options">
                            ...
                        </div>
                    </div>
                    <div className="post-img">

                    </div>
                    <div className="comments-links">
                        <div className="three-icons">
                            <CiHeart className='heart' />
                            <BsChat className='chat' />
                            <FiSend className='send' />
                        </div>
                        <div className="one-icons">
                            <LiaBookmarkSolid className='save' />
                        </div>
                    </div>
                    <div className="likes">
                        2789202 likes
                    </div>
                    <div className="comment-section">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni.
                    </div>
                </div>
                <div className="posts-reels">
                    <div className="username-profile">
                        <div className='username-followbtn-img'>
                            <div className="dp"></div>
                            <div className="user">
                                nihal
                            </div>
                            <div className="follow-btn">
                                follow
                            </div>
                        </div>
                        <div className="options">
                            ...
                        </div>
                    </div>
                    <div className="post-img">

                    </div>
                    <div className="comments-links">
                        <div className="three-icons">
                            <CiHeart className='heart' />
                            <BsChat className='chat' />
                            <FiSend className='send' />
                        </div>
                        <div className="one-icons">
                            <LiaBookmarkSolid className='save' />
                        </div>
                    </div>
                    <div className="likes">
                        2789202 likes
                    </div>
                    <div className="comment-section">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni.
                    </div>
                </div>
                <div className="posts-reels">
                    <div className="username-profile">
                        <div className='username-followbtn-img'>
                            <div className="dp"></div>
                            <div className="user">
                                nihal
                            </div>
                            <div className="follow-btn">
                                follow
                            </div>
                        </div>
                        <div className="options">
                            ...
                        </div>
                    </div>
                    <div className="post-img">

                    </div>
                    <div className="comments-links">
                        <div className="three-icons">
                            <CiHeart className='heart' />
                            <BsChat className='chat' />
                            <FiSend className='send' />
                        </div>
                        <div className="one-icons">
                            <LiaBookmarkSolid className='save' />
                        </div>
                    </div>
                    <div className="likes">
                        2789202 likes
                    </div>
                    <div className="comment-section">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni.
                    </div>
                </div>
                <div className="posts-reels">
                    <div className="username-profile">
                        <div className='username-followbtn-img'>
                            <div className="dp"></div>
                            <div className="user">
                                nihal
                            </div>
                            <div className="follow-btn">
                                follow
                            </div>
                        </div>
                        <div className="options">
                            ...
                        </div>
                    </div>
                    <div className="post-img">

                    </div>
                    <div className="comments-links">
                        <div className="three-icons">
                            <CiHeart className='heart' />
                            <BsChat className='chat' />
                            <FiSend className='send' />
                        </div>
                        <div className="one-icons">
                            <LiaBookmarkSolid className='save' />
                        </div>
                    </div>
                    <div className="likes">
                        2789202 likes
                    </div>
                    <div className="comment-section">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni.
                    </div>
                </div>
                <div className="posts-reels">
                    <div className="username-profile">
                        <div className='username-followbtn-img'>
                            <div className="dp"></div>
                            <div className="user">
                                nihal
                            </div>
                            <div className="follow-btn">
                                follow
                            </div>
                        </div>
                        <div className="options">
                            ...
                        </div>
                    </div>
                    <div className="post-img">

                    </div>
                    <div className="comments-links">
                        <div className="three-icons">
                            <CiHeart className='heart' />
                            <BsChat className='chat' />
                            <FiSend className='send' />
                        </div>
                        <div className="one-icons">
                            <LiaBookmarkSolid className='save' />
                        </div>
                    </div>
                    <div className="likes">
                        2789202 likes
                    </div>
                    <div className="comment-section">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni.
                    </div>
                </div>
                <div className="posts-reels">
                    <div className="username-profile">
                        <div className='username-followbtn-img'>
                            <div className="dp"></div>
                            <div className="user">
                                nihal
                            </div>
                            <div className="follow-btn">
                                follow
                            </div>
                        </div>
                        <div className="options">
                            ...
                        </div>
                    </div>
                    <div className="post-img">

                    </div>
                    <div className="comments-links">
                        <div className="three-icons">
                            <CiHeart className='heart' />
                            <BsChat className='chat' />
                            <FiSend className='send' />
                        </div>
                        <div className="one-icons">
                            <LiaBookmarkSolid className='save' />
                        </div>
                    </div>
                    <div className="likes">
                        2789202 likes
                    </div>
                    <div className="comment-section">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni.
                    </div>
                </div>
                <div className="posts-reels">
                    <div className="username-profile">
                        <div className='username-followbtn-img'>
                            <div className="dp"></div>
                            <div className="user">
                                nihal
                            </div>
                            <div className="follow-btn">
                                follow
                            </div>
                        </div>
                        <div className="options">
                            ...
                        </div>
                    </div>
                    <div className="post-img">

                    </div>
                    <div className="comments-links">
                        <div className="three-icons">
                            <CiHeart className='heart' />
                            <BsChat className='chat' />
                            <FiSend className='send' />
                        </div>
                        <div className="one-icons">
                            <LiaBookmarkSolid className='save' />
                        </div>
                    </div>
                    <div className="likes">
                        2789202 likes
                    </div>
                    <div className="comment-section">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post