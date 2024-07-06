import React from 'react'
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
function Navlinks(props) { 
    const navigate = useNavigate()

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
            <div className="links" onClick={() => props.setCreatePost(!props.creatPost)}>
                <MdAddBox className='logo' />
                Create
            </div>
            <div className="links">
                <CgProfile className='logo' />
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