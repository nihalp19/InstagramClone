import Reactemail, { useEffect, useState } from 'react'
import './Profile.css'
import Navlinks from '../Navlinks/Navlinks'
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdGrid } from "react-icons/io";
import { FiBookmark } from "react-icons/fi";
import { LuContact2 } from "react-icons/lu";
import { Link, Outlet } from 'react-router-dom';
import { getDocs, collection, addDoc, query } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../firebase';
import { nanoid } from 'nanoid';

function Profile() {

    const [currentUserData, setcurrentUserData] = useState([])
    const [profilImg, setProfileImg] = useState();
    const [profileImgUrl, setProfileImgUrl] = useState();
    const docRef = collection(db, "users");

    const id = nanoid();
    const imgRef = ref(storage,`images/profile${auth?.currentUser?.email}${id}`)
    const handleImageClick =  () => {
        document.querySelector('.fileImg').click();
    }

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if(file)
        {
            setProfileImg(file)
            const metadata = {
                contentType: file.type,
            }
            await uploadBytes(imgRef,file,metadata)
            const downloadUrl = await getDownloadURL(imgRef)
            setProfileImgUrl(downloadUrl)
            localStorage.setItem('imageUrl',downloadUrl);
        }
    }


    useEffect(() => {
        const func = async () => {
            const users = await getDocs(docRef)
            const snapShot = users.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            const filterData = snapShot.filter((s) => { return s.Email == localStorage.getItem('email') })
            setcurrentUserData(filterData);
        }
        func();
    }, [])


    return (
        <div className='profile'>
            <div className="profile-contents">
                <Navlinks />
                <div className="wrapper">
                    <div className="profile-section">
                        <div className="profile-pic">
                            <input className='fileImg' type="file" accept='video/*,image/*' style={{ display: 'none' }} multiple={false} onChange={handleImageChange}/>
                                <img src={localStorage.getItem('imageUrl')~}  onClick={handleImageClick} />
                        </div>
                        <div className="profile-details">
                            <div className="line-1">
                                <p className='userName'>{currentUserData.map((c) => { return (c.userName) })}</p>
                                <button className='edit-btn'>Edit profile</button>
                                <button className='view-btn'>View archive</button>
                                <IoSettingsSharp className='setting-icons' />
                            </div>
                            <div className="following-followers">
                                <div className="posts">0 posts</div>
                                <div className="followers">36 followers</div>
                                <div className="following">36 following</div>
                            </div>
                            <div className="name-bio">
                                <p className='name'>barbarian</p>
                                <p className='bio'>coding journey</p>
                            </div>
                        </div>
                    </div>
                    <div className='routing'>
                        <div className='post'>
                            <IoMdGrid /><Link to='/profile/'>POST</Link></div>
                        <div className='saved'><FiBookmark /><Link to='/profile/save'>SAVED</Link></div>
                        <div className='tagged'><LuContact2 /><Link to='/profile/tagged'>TAGGED</Link></div>
                    </div>
                    <div className="display-result">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile