import React, { useContext } from 'react'
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { MdAddBox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import './Navlinks.css'
import UserContext from '../../Context/UserContext';

function Navlinks() { 
    const navigate = useNavigate()

    const {setCreatePost} = useContext(UserContext)
    return (
        <div className="navlinks_links">
            <h2 className='insta-logo'>Instagram</h2>
            <div className="links" onClick={() => navigate('/home')}>
                <GoHome className='logo' />
                Home
            </div>
            <div className="links">
                <CiSearch className='logo' />
                Search
            </div>
            <div className="links">
                <MdOutlineExplore className='logo' />
                Explore
            </div>
            <div className="links">
                <BiMoviePlay className='logo' />
                Reels
            </div>
            <div className="links">
                <RiMessengerLine className='logo' />
                Messages
            </div>
            <div className="links">
                <CiHeart className='logo' />
                Notifications
            </div>
            <div className="links" onClick={() => setCreatePost(true)}>
                <MdAddBox className='logo' />
                Create
            </div>
            <div className="links" onClick={() => navigate('/profile')}>
                <img src={localStorage.getItem('profileimageUrl')}  className="profile"/>
                Profile
            </div>
            <div className="ham-link">
                <RxHamburgerMenu className='logo' />
                More
            </div>
        </div>
    )
}

export default Navlinks