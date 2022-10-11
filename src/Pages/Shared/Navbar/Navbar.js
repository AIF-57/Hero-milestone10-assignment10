import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className='grid grid-cols-6 px-10 gap-10 items-center mt-5'>
            <div className="logo col-span-2 text-left">
                <Link to={'/'}>
                <FontAwesomeIcon icon={faHandshakeAngle} className='text-6xl'></FontAwesomeIcon>
                <p className='inline-block font-semibold text-lg'><span className='text-4xl font-bold'>a</span>ccountants</p>
                </Link>
            </div>
            <nav className='col-span-4 text-sm font-semibold border py-3 bg-[#2f4d5a] text-white rounded-md'>
                <Link to={'/'}>Home</Link>
                <Link to={'/services'} className='mx-8'>Services</Link>
                <Link to={'/blogs'}>Blogs</Link>
                <Link to={'/about'} className='mx-8'>About</Link>
                <Link to={'/contact'}>Contact up</Link>
                <Link to={'/career'} className='mx-8'>Career</Link>
                <Link to={'/account'}>Account</Link>
            </nav>
        </div>
    );
};

export default Navbar;