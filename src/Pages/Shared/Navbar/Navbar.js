import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandshakeAngle,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const aUth = auth;
const Navbar = () => {
    const [user] = useAuthState(aUth);
    const SignOut = () => {
        signOut(aUth)
    } 

    // console.log(user);
    return (
        <div className='grid grid-cols-6 px-10 gap-10 items-center mt-2 mb-1 sticky top-0 z-10 bg-[#f5f5f5]'>
            <div className="logo col-span-2 text-left py-2">
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
                <Link to={'/contact'}>Contact us</Link>
                <Link to={'/career'} className='mx-8'>Career</Link>
                {
                    user ? 
                    <button onClick={SignOut}><FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon></button>
                    :
                    <Link to={'/account'}>Account</Link>
                }
            </nav>
        </div>
    );
};

export default Navbar;